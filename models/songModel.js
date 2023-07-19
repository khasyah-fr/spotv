const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artists: [{ type: mongoose.Schema.Types.ObjectId, ref: "Artist" }],
  url: { type: String, required: true },
  playcount: { type: Number, default: 0 },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
