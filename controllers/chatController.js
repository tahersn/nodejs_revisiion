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
        
}
        catch(error){
            console.log(error);
        }
};