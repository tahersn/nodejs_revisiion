const express =require("express");
const multer = require('multer');
const router = express.Router();
const userController = require("../controllers/userController")
const validation = require("../middlewares/validate")
const upload = multer({ dest: 'uploads/' });


router.post('/add',validation.validateAttributes,userController.create);
router.delete('/delete/:id',userController.deleteUser);
router.get('/getAll',userController.GetAll);
router.get('/getOne/:id',userController.getbyid);
router.put('/updateOne/:id',userController.update);
router.get('/getByName/:name',userController.getByName);
router.post('/addupload', upload.single('photo'), validation.validateAttributes, userController.createupload);



module.exports = router ;