const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Songs");
const User = require("../models/Users");

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    if (!name || !thumbnail || !track) {
      return res
        .status(301)
        .json({ err: "Insufficient details to create song." });
    }
    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    const createdSong = await Song.create(songDetails);
    console.log("Song Created successfuly", createdSong);
    return res.status(200).json(createdSong);
  }
);

// Get route to get all songs i have created.
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    // We need to get all songs where artist id == currentUser._id
    const songs = await Song.find({ artist: req.user._id }).populate("artist");
    console.log("Here are my songs : \n", songs);
    return res.status(200).json({ data: songs });
  }
);

// Get route to get all songs any artist has published
// I will send the artist id and I want to see all songs that artist has published.
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistId } = req.params;
    // We can check if the artist does not exist
    const artist = await User.findOne({ _id: artistId });
    
  
    if (!artist) {
      res.status(301).json({ err: "Artist does not exist !!!" });
    }

    const songs = await Song.find({ artist: artistId });
    console.log("Here are your atist songs : \n", songs);
    return res.status(200).json({ data: songs });
  }
);

// Get route to get a single song by name
// Spaces in song name to be taken care of.
router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    const songs = await Song.find({ name: songName });
    console.log("Here are your atist songs : \n", songs);
    return res.status(200).json({ data: songs});
  }
);

module.exports = router;
