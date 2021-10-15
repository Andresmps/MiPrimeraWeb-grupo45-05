const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const path = require ('path');


const app = express ();

//Conexión BD Mongo
const mongoose = require ('mongoose');
//const url = 'mongodb://localhost:27017/iserviBd';
const url = 'mongodb+srv://root:iservi@cluster0.ut16h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(url,options).then(
    ()=>{console.log('Conectado a Mongo')},
    err=>(err)
);

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
//app.get('/',function(req,res){
//   res.send('Servidor en Operación')
//});

//middleware para vue.js
app.use('/api',require('./routes/iserviBd'));
const history = require ('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname,'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'),function(){
    console.log('Escuchando el Puerto ' +app.get('puerto'));
});