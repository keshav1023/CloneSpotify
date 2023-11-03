const express = require("express");
const passport = require("passport");
const router = express.Router();
const Playlist = require("../models/Playlist")

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

// Get aplaylist by ID

module.exports = router;
