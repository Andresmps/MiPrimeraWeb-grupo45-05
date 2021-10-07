import mongoose, { SchemaTypes } from 'mongoose';
const Schema = mongoose.Schema;

const employees_schema = new Schema({
    username: { type: String, required: [true, 'Username requeried'] },
    password: { type: String, required: [true, 'Password requeried'] },
    name: String,
    email: String,
    address: String,
    phone_number: String,
    created_at: { type: Date, default: Date.now },
    employee_reliability: { type: Number, default: 0.7 },
    employee_description: String,
    experience: String,
    services: [{
        type: Schema.Types.ObjectId,
        ref: 'services'
    }],
});

module.exports = mongoose.model('employees', employees_schema);
