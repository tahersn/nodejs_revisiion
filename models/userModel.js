const mongoose = require('mongoose');
const User = new mongoose.Schema({
    name: String,
    email: String,
    cin: String,
    photo: {
        type: String,  // Assuming you store the image path as a string
      },
});

//module.exports = mongoose.model('User', User);