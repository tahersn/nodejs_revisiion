// const express =require("express");
// const multer = require('multer');
// const router = express.Router();
// const userController = require("../controllers/userController")
// const validation = require("../middlewares/validate")
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/'); // Define the destination folder for storing the uploaded images
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); // Generate a unique suffix for each uploaded image
//       const fileExtension = path.extname(file.originalname); // Get the file extension from the original filename
//       const filename = file.fieldname + '-' + uniqueSuffix + fileExtension; // Construct the final filename
//       cb(null, filename);
//     }
//   });
  
//   // Configure multer with the storage options
//   const upload = multer({ storage: storage });

// router.post('/add',validation.validateAttributes,userController.create);
// router.delete('/delete/:id',userController.deleteUser);
// router.get('/getAll',userController.GetAll);
// router.get('/getOne/:id',userController.getbyid);
// router.put('/updateOne/:id',userController.update);
// router.get('/getByName/:name',userController.getByName);
// router.post('/addupload', upload.single('photo'), validation.validateAttributes, userController.createupload);



// module.exports = router ;