
 const express =require("express");
const joueurController = require("../controllers/joueurController")
 const router = express.Router();

 router.post('/add',joueurController.createJoueur);
 router.get('/getAll',joueurController.getAllJoueur);
 router.get('/getOne/:id',joueurController.getJoueurById);
 router.delete('/delete/:id',joueurController.deleteJoueur);
 router.put('/attaque/:idA/:idD',joueurController.attaque);





module.exports = router ;