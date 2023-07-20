const Playlist = require("../models/playlistModel");

// Get all playlists
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new playlist
exports.createPlaylist = async (req, res) => {
  try {
    const { title, description } = req.body;
    const playlist = new Playlist({ title, description });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
