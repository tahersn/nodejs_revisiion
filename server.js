const express = require('express');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');
const http = require ("http");
const mongoose = require('mongoose');
const mongoConnection= require('./config/dbConnection.json');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const UserRouter = require("./routes/userRouter");
app.use('/user',UserRouter);

const server = http.createServer(app);
mongoose.connect(mongoConnection.dbURL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connected to database");})   

server.listen(port, () => console.log(`Server listening on port ${port}!`));