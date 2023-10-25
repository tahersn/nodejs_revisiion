const express =require("express");
const partieController = require("../controllers/partieController")
const router = express.Router();



router.post('/add',partieController.createPartie);

module.exports = router ;