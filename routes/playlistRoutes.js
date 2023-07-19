const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.get("/playlists", playlistController.getAllPlaylists);
router.post("/playlists", playlistController.createPlaylist);
router.post("/playlists/:id", playlistController.addSongToPlaylist);
router.get("/playlists/:id/songs", playlistController.getAllSongsInPlaylist);

module.exports = router;
