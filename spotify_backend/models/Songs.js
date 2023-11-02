const mongoose = require("mongoose");

const Song = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    thumbnail: {
        type : String,
        required : true,
    },
    track : {
        type : String,
        required : true,
    },
    artist : {
        type : mongoose.Types.ObjectId,
        ref : "user",
        required : true,
    }
});

const SongModel = mongoose.model("Song", Song);

model.exports = SongModel;