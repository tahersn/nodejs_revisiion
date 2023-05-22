const User = require ('../models/userModel.js')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const path = require('path');

// Set up the storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Define the destination folder for storing the uploaded images
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix); // Generate a unique filename for each uploaded image
    }
  });
  
  

  async function createupload(req, res) {
    try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        cin: req.body.cin,
        photo: req.file.path  // Save the path of the uploaded image to the `photo` attribute
      });
      await user.save();
      res.send("User added successfully");
    } catch (error) {
      console.log(error);
    }
  }


async function create( req,res){
    try{
        var user = new User(req.body);
        await user.save();
        res.send("user added successfully");              
    } catch(error){
        console.log(error);
    }
}
async function getByName(req,res){
    try{
        const data = await User.find({name:req.params.name});
        res.send(data);
    }catch(error){
        console.log(error.message);
    }
}



async function deleteUser (req,res){
    try{
        await User.findByIdAndRemove(req.params.id)
        res.send("user deleted !")
    }catch(error){
        console.log(error);
    }
}
async function GetAll (req,res){
    try{
       const data =  await User.find();
        res.send(data);
    }catch(error){
        res.send(error.message);
    }
}
async function getbyid (req,res){
    try{
        const data = await User.findById(req.params.id);
        res.send(data)
    }catch(error){
        console.log(error.message);
    }
}
async function update(req,res){
    try {
        await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.send("updated ! ");
    }catch(error){
        console.log(error.message);
    }
}

module.exports= {
    create,
    deleteUser,
    GetAll,
    getbyid,
    update,
    getByName,
    createupload
}