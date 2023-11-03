const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist");
const User = require("../models/Users");
const Song = require("../models/Songs");


// Create a playlist
router.post("/create",
passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const {name,thumbnail,songs} = req.body;
    if(!name || !thumbnail || !songs){
        return res.status(301).json({err: "Insufficient Data !!!"});
    }
    const playlistData = {
        name,
        thumbnail,
        songs,
        owner: currentUser._id,
        collaborators: [],
    };
    const playlist = await Playlist.create(playlistData);
    console.log("Here are your created playlist : \n", playlist);
    return res.status(200).json(playlist);
  }
);

// Get a playlist by ID
// playlistId variable gets assigned the value
router.get("/get/playlist/:playlistId" ,
passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const playlistId = req.params.playlistId;
    const playlist = await Playlist.findOne({_id: playlistId});
    if(!playlist){
        return res.status(301).json({err: "Invalid Id !!!"});
    }
    console.log("Here are your searched playlist : \n", playlist);
    return res.status(200).json(playlist);

  }
);

// Get all playlist of an artist
router.get("/get/artist/:artistId" ,
passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistId =req.params.artistId;
    
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res.status(301).json({err: "Invalid artist Id !!!"});
    }

    const playlists = await Playlist.find({owner: artistId});
    console.log("Here are all playlists of your artist : \n", playlists);
    return res.status(200).json({data: playlists});
  }
);


// Add a song to a playlist
router.post("/add/song/" ,
passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const {playlistId , songId} = req.body;

    const playlist = await Playlist.findOne({_id: playlistId});
    if(!playlist){
        return res.status(301).json({err: "Playlist does not exist!!!"});
    }
    // console.log(playlist);
    // console.log(currentUser);
    // console.log(playlist.owner);
    // console.log(currentUser._id);
    // console.log(playlist.owner.equals(currentUser._id));

    if(
        !playlist.owner.equals(currentUser._id) && 
        !playlist.collaborators.includes(currentUser._id)
    ){
        return res.status(400).json({err: "Not allowed"});
    }
    const song = await Song.findOne({_id: songId});
    if(!song){
        return res.status(301).json({err: "Song does not exist!!!"});
    }
    // validation done , now add song to playlist.
    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);

  }
);


module.exports = router;
