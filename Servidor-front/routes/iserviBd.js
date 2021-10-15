import express from 'express';
//import req from 'express/lib/request';
const router = express.Router();

//importar el Modelo Nota
import IserviBd from '../models/iserviBd';

//Agregar un Registro
router.post('/nuevo-registro', async(req, res)=>{
    const body= req.body;

    try{
        const SiserviBd = await IserviBd.create(body);
        res.status(200).json(SiserviBd);
    } catch (error){
        return res.status(500).json({
            mensaje: 'Ocurrió algo inesperado',
            error
        })
    }
});

//Get Busca todos los registros
router.get('/buscarTodo', async(req,res)=>{

    try{
        const SiserviBd = await IserviBd.find();
        res.json(SiserviBd);
    }catch (error){
        return res.status(400).json({
            mensaje: 'Error en la Búsqueda',
            error
        })
    }
 
});

//Get Búsqueda con Parámetro
router.get('/buscarParametro/:id',async(req,res)=>{
const _id = req.params.id;
    try {
        const SiserviBd = await IserviBd.findOne({_id});
        res.json(SiserviBd);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Error en la búsqueda de parámetro',
            error
        })
    }
});

//Delete Eliminar un registro de la Base de Datos
router.delete('/eliminarParametro/:id', async(req,res)=>{
    const _id = req.params.id;
    try {
        const SiserviBd = await IserviBd.findByIdAndDelete({_id});
        if(!SiserviBd){
            return res.status(400).json({
                mensaje: 'No se encontro el registro',
                error
            })
        }
        res.json(SiserviBd);
    } catch (error) {
        return res.status(400).json({
            mensaje: "Error en la eliminación del parámetro",
            error
        })
    }
});

//Actualizar Registro - PUT
router.put('/actualizar/:id', async(req,res)=>{
    const _id = req.params.id;
    const body = req.body;

    try {
        const SiserviBd = await IserviBd.findByIdAndUpdate(
            _id,
            body,{new:true});
            res.json(SiserviBd)
    } catch (error) {
        return res.status(400).json({
            mensaje:'No se logró actualizar el registro',
            error
        })
    }
});



//Exportar la Configuración de Express
module.exports=router;
