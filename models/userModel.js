const mongoose = require('mongoose');
const User = new mongoose.Schema({
    name: String,
    email: String,
    cin: String,});

module.exports = mongoose.model('User', User);