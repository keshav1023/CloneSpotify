// npm init  : package.json -- This is a node project
// npm i express : expressJs package installed

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("./models/Users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


mongoose
  .connect(
    "mongodb+srv://lmessi10:" +
      process.env.MONGO_PASSWORD +
      "@cluster0.dvkiufo.mongodb.net/Spotify?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo Database !!!");
  })
  .catch((err) => {
    console.log("Error while connecting to Mongo");
  });

// setup passpot-jwt

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secretKey";
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({_id: jwt_payload.identifier }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

// API GET type "/"

app.get("/", (req, res) => {
  //req - contains data for requests
  //res - contains data for response
  res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Telling APP to run on specific port number

app.listen(port, () => {
  console.log("App is running on port : " + port);
  console.log("Connecting MongoDB plz wait.....");
});
