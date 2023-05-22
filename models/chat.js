const schema =require('mongoose').Schema;
const mongoose = require('mongoose');

const Message = new schema({
    message: String,
    pseudo: String,
    date: Date
});

module.exports = mongoose.model('Message', Message);