const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');
const http = require ("http");
const mongoose = require('mongoose');
const mongoConnection= require('./config/dbConnection.json');
const path =require("path");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });






app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//views
app.set("views",path.join(__dirname,"views"));
app.set("view engine",'twig');


const UserRouter = require("./routes/userRouter");
const ChatRouter = require("./routes/chatRouter");
const { createMessage,deleteMessage } = require('./controllers/chatController');
const {getByName}=require('./controllers/userController')
app.use('/user',UserRouter);  
app.use('/chat',ChatRouter);

const server = http.createServer(app);
const io = require ("socket.io")(server);
io.on('connection', function(socket) {
     console.log ('User Connected..');
     socket.on("new-user", function(data){
          console.log(data);
          socket.broadcast.emit("new-user",data);
     }) 
     socket.on("typing",function(data){
          socket.broadcast.emit("typing",data+" is typing ...");
     })       
     socket.on('sendMessage', (data) => {
          console.log(data);
          if(data.pseudo !== null && data.pseudo !== "" && data.msg !== null && data.msg !== ""){
          data.user=getByName(data.pseudo)
          console.log(data)
          createMessage(data).then((newMessage)=>{
               console.log(newMessage);
         
        //to all
          io.emit("newMessage", newMessage); })
          
        }
        }
        );
     socket.on("deleteMessage",function(data){
          console.log("deleting "+data);
          deleteMessage(data).then((id)=>{
               io.emit("removeMessage",id)});
          console.log("deleted");
     }) 
       
     socket.on('disconnect',()=>{
          console.log("user disconnected")
     })   
});
mongoose.connect(mongoConnection.dbURL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connected to database");})   

server.listen(port, () => console.log(`Server listening on port ${port}!`));