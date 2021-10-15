import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    id_customer: String,
    name: String,
    email:String,
    address:String,
    username:{type:String, required:[true,'Nombre de Usuario obligatorio']},
    password:{type:String, required:[true,'Contraseña Obligatoria']},
    created_at:{type:Date, default: Date.now},
    active_user:{type:Boolean, default: true},
});
//Convertir Modelo
const iserviBd = mongoose.model('iserviBd',customerSchema);
export default iserviBd;