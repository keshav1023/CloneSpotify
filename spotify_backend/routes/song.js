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

    const songs = await Song.find({
      name: { $regex: ".*" + songName + ".*", $options: "i" },
    }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);


//Like a song

router.post("/like/song" ,
passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    console.log(req.body);
    const {songId} = req.body;

    const user = await User.findOne({_id: currentUser});
    console.log(user.likedSongs);

    user.likedSongs.push(songId);
    await user.save();

    return res.status(200).json(user);

  }
);

// Get route to get all songs i have liked.
router.get(
  "/get/myLiked/songs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    // We need to get all songs where artist id == currentUser._id
    const songs = await User.find({ _id: currentUser, likedSongs: { $exists: true, $not: { $size: 0 } } }).populate({
      path: "likedSongs",
      populate: {
        path: "artist",
      },
    });
    return res.status(200).json({ data: songs });
  }
);

// Post route to remove a song from a user's likedSongs
router.post(
  '/remove/likedSong',
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
  const currentUser = req.user;
  
  const { songId } = req.body;

  const user = await User.findById(currentUser);

  const songIndex =  user.likedSongs.findIndex((song) => song.equals(songId));

  user.likedSongs.splice(songIndex, 1);

    // Save the updated user
    await user.save();

    return res.status(200).json({ data: user.likedSongs, message: 'Song removed from likedSongs' });
  
});

module.exports = router;
