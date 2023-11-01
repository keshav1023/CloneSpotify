const mongoose = require("mongoose");

const User = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
    },
    lastName:{
        type : String,
        required : false,
    },
    email:{
        type : String,
        required : true,
    },
    userName:{
        type : String,
        required : true,
    },
    likedSongs:{
        // Will change further
        type : String,
        default : "",
    },
    likedPlaylists:{
        // Will change further
        type : String,
        default : "",
    },
    subscribedArtists:{
        // Will change further
        type : String,
        default : "",
    }
});

const UserModel = mongoose.model("User", User);

model.exports = UserModel;