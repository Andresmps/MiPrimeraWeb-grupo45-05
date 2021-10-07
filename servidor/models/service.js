import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const services_schema = new Schema({
    service_name: { type: String, required: [true, 'Username requeried'] },
    service_description: String,
    cost_per_hour: { type: Number, required: [true, 'Cost requeried'] },
    rating: { type: Number, default: 0.7 }
});


module.exports = mongoose.model('services', services_schema);

