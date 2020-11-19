//step 1- import express
const express = require('express');
const apiRoutes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiController = require('./apiController')


//using the body parser

app.use(bodyParser.json())
const app = express();
var port = process.env.PORT || 8080; // creating  a port where our server is gonna run

//welcome message
app.get('/', (req, res)=>{
    console.log("welcome to express");
})

//We need to use the routes here
app.use('/api', apiRoutes)

//creating database
const dbPath = 'mongodb://localhost/user-info';
//connecting to the database 
const mongo = mongoose.connect(dbPath)

//make the port to listen to the server
app.listen(port, ()=>{
    console.log("Listening to port" +port)
})