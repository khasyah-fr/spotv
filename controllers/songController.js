const Song = require("../models/songModel");
const Playlist = require("../models/playlistModel");

// Add song to a playlist
exports.addSongToPlaylist = async (req, res) => {
  const { id } = req.params;
  const { title, artists, url } = req.body;

  try {
    // Find the playlist by id
    const playlist = await Playlist.findById(id);

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    // Create the song and add it to the playlist
    const song = new Song({ title, artists, url });
    await song.save();

    playlist.songs.push(song._id);
    await playlist.save();

    res.status(201).json(song);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all songs inside a playlist
exports.getAllSongsInPlaylist = async (req, res) => {
  const { id } = req.params;

  try {
    const playlist = await Playlist.findById(id).populate("songs");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }
    res.json(playlist.songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Play song on a playlist
exports.playSongOnPlaylist = async (req, res) => {
  const { id, songId } = req.params;

  try {
    const playlist = await Playlist.findById(id).populate("songs");
    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    const song = playlist.songs.find((song) => song._id.toString() === songId);
    if (!song) {
      return res.status(404).json({ message: "Song not found in playlist" });
    }

    // Increment playcount for the song
    song.playcount++;
    await song.save();

    res.json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all songs sorted by playcount
exports.getAllSongsSortedByPlaycount = async (req, res) => {
  try {
    const songs = await Song.find().sort({ playcount: -1 });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
