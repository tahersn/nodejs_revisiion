const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');
const http = require ("http");
const mongoose = require('mongoose');
const mongoConnection= require('./config/dbConnection.json');
const path =require("path");



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//views
app.set("views",path.join(__dirname,"views"));
app.set("view engine",'twig');


const UserRouter = require("./routes/userRouter");
const ChatRouter = require("./routes/chatRouter");
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
     socket.on("savemessage", function(data){
          //socket.broadcast.emit("new user-message",data);
          console.log(data);
          io.emit("newMessage",data);

     })
});
mongoose.connect(mongoConnection.dbURL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connected to database");})   

server.listen(port, () => console.log(`Server listening on port ${port}!`));