const Joueur = require('../models/Joueur');

async function createJoueur(req, res) {
    try {
      const joueur = new Joueur({
        pseudo: req.body.pseudo,
        sante: req.body.sante,
        score: req.body.score,
      });
      await joueur.save();
      res.send("joueur added successfully"+":"+joueur.pseudo);
    } catch (error) {
      console.log(error);
    }
  }

  
async function getAllJoueur(req, res) {
    try {
        const joueurs = await Joueur.find();
        res.status(200).json(joueurs);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err);
    }
}

async function getJoueurById(req, res) {
    try {
        const joueur = await Joueur.findById(req.params.id);
        res.status(200).json(joueur);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err);
    }
}

async function deleteJoueur(req, res) {
    try {
        await Joueur.findByIdAndRemove(req.params.id)
        res.send("joueur deleted !")
    } catch (error) {
        console.log(error);
    }
}
async function attaque(req, res) {
    try {
        const striker = await Joueur.findById(req.params.idA);
        const defender = await Joueur.findById(req.params.idD);
        striker.score += 10;
        if (defender.score >= 20){
        defender.score -= 20;}
        else{
            defender.score = 0;
        }
        await striker.save();
        await defender.save();
        res.send("attac done !")
    } catch (error) {
        console.log(error);
    }
}



  module.exports = {
    createJoueur,
    getAllJoueur,
    getJoueurById,
    deleteJoueur,
    attaque}