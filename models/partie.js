const schema =require('mongoose').Schema;
const mongoose = require('mongoose');

const Partie = new schema({
    nom: String,
    joueur_1: String,
    joueur_2: String,
    
    etat:{type: String,default:'en cours'}
});
module.exports = mongoose.model('Partie', Partie);