const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");

router.post("/playlists/:id/songs", songController.addSongToPlaylist);
router.get("/playlists/:id/songs", songController.getAllSongsInPlaylist);
router.get("/songs", songController.getAllSongsSortedByPlaycount);
router.get("/playlists/:id/songs/:songId", songController.playSongOnPlaylist);

module.exports = router;
