const express =require("express");
const router = express.Router();
const userController = require("../controllers/userController")


router.post('/add',userController.create);
router.delete('/delete/:id',userController.deleteUser);
router.get('/getAll',userController.GetAll);
router.get('/getOne/:id',userController.getbyid);
router.put('/updateOne/:id',userController.update);


module.exports = router ;