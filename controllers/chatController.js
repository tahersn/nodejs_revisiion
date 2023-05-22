const Message = require('../models/chat');

exports.createMessage = async (data) => {
    console.log(data);
   try{ const message = new Message({
        message: data.message,
        pseudo: data.pseudo,
        date: new Date()
   }    
    );
    message.save();}
        catch(error){
            console.log(error);
        }
};