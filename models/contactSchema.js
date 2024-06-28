const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactInfo = new Schema({
    fullName: String,
    email: String,
    message: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports.contactDB = mongoose.model("Contact", ContactInfo);