 const express =require("express");
// const chatController = require("../controllers/chatController")
 const router = express.Router();


// router.post('/add',chatController.createMessage);
// router.get('/messages',chatController.getMessages);
router.get('/chat',(req,res,next)=>
 {
     res.render('chat');
 })

module.exports = router ;