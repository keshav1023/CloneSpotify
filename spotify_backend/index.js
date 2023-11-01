// npm init  : package.json -- This is a node project
// npm i express : expressJs package installed

const express = require("express");
const app = express();
const port = 8000;

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