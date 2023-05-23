const Message = require('../models/chat');

exports.createMessage = async (data,res) => {
    console.log(data);
   try{ const message = new Message({
        message: data.message,
        pseudo: data.pseudo,
        date: new Date(),
        user:data.user
   }    
    );
    const savedMessage = await message.save();
    return savedMessage;     
}
        catch(error){
            console.log(error);
        }
};
exports.getMessages= async(req,res,next)=> {
    console.log("Getting messages...");
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    }
    catch (err) {
        res.status(500).json({message: err.message});
        console.log(err);
    }
}

//get message by id and delete it
exports.deleteMessage = async (id) => {
    console.log("id from controller"+id);
    await Message.deleteOne({_id: id});
    return id;
};
