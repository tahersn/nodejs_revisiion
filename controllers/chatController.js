const Message = require('../models/chat');

exports.createMessage = async (data,res) => {
    console.log(data);
   try{ const message = new Message({
        message: data.message,
        pseudo: data.pseudo,
        date: new Date()
   }    
    );
    const savedMessage = await message.save();
    return savedMessage;     
}
        catch(error){
            console.log(error);
        }
};
//get message by id and delete it
exports.deleteMessage = async (id) => {
    console.log("id from controller"+id);
    await Message.deleteOne({_id: id});
    return id;
};
