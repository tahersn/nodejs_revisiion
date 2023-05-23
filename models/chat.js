const schema =require('mongoose').Schema;
const mongoose = require('mongoose');
const User =require('./userModel')

const Message = new schema({
    message: String,
    pseudo: String,
    date: Date,
    user:User.schema
});

module.exports = mongoose.model('Message', Message);