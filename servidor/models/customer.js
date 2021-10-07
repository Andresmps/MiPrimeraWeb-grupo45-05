import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const customers_schema = new Schema({
    username: { type: String, required: [true, 'Username requeried'] },
    password: { type: String, required: [true, 'Password requeried'] },
    name: String,
    email: String,
    address: String,
    phone_number: String,
    created_at: { type: Date, default: Date.now },
    customer_reliability: { type: Number, default: 0.7 },
    active_user: { type: Boolean, default: true }
});


module.exports = mongoose.model('customers', customers_schema);


