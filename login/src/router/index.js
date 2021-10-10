import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import decode from 'jwt-decode'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/Login.vue'),
    meta: { requireAuth: true },
    children : [
      {path : 'usuarios',
      name : 'Usuarios',
      meta : {
        Administrador : true
      },
      component: () => import(/* webpackChunkName: "usuarios" */ '../components/UsuariosDT.vue'),

    },
      {
        path : 'articulos',
        name : 'Articulos',
        component: () => import(/* webpackChunkName: "articulos" */ '../components/ArticulosDT.vue'),

      },
      {
        path : 'categorias',
        name : 'Categorias',
        component: () => import(/* webpackChunkName: "categorias" */ '../components/CategoriasDT.vue'),

      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let token = localStorage.getItem('token');
    if (!token) {
      next({
        name: 'Login',
        // query: { redirect: to.fullPath }
      })
    } else {
      if (to.matched.some(record => record.meta.Administrador)) {
        let decodeToken = decode(token);
        if(decodeToken["rol"]==='Administrador'){
          next()
        }else{
          next({
            name : 'Admin',
          })
        }
      }

      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
