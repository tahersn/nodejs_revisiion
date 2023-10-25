const Partie = require('../models/partie');


async function createPartie(req, res) {
    try{
        const partie = new Partie({
            nom: req.body.nom,
            joueur_1: req.body.joueur1,
            joueur_2: req.body.joueur2,
            etat: "en cours",
        });
        await partie.save();
        return res.send("partie added successfully"+":"+partie.nom);
    }catch(error){
        console.log(error);
    }}
module.exports = {
    createPartie}    