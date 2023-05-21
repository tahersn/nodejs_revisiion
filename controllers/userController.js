const User = require ('../models/userModel.js')

async function create( req,res){
    try{
        var user = new User(req.body);
        await user.save();
        res.send("user added successfully");              
    } catch(error){
        console.log(error);
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
    update
}