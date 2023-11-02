// npm init  : package.json -- This is a node project
// npm i express : expressJs package installed

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;

mongoose.connect("mongodb+srv://lmessi10:"+process.env.MONGO_PASSWORD+"@cluster0.dvkiufo.mongodb.net/?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then((x) => {
    console.log("Connected to Mongo Database !!!");
})
.catch((err) => {
    console.log("Error while connecting to Mongo");
});


// API GET type "/"
app.get("/", (req,res) => {
    //req - contains data for requests
    //res - contains data for response
    res.send("Hello World");
});

// Telling APP to run on specific port number

app.listen(port, () => {
    console.log("App is running on port : " + port);
});