const schema =require('mongoose').Schema;
const mongoose = require('mongoose');

const Joueur = new schema({
    pseudo: String,
    sante: Number,
    score: Number
});
module.exports = mongoose.model('Joueur', Joueur); 