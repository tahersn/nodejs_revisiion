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

module.exports= {
    create
}