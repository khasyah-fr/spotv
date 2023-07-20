const express = require("express");
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.get("/playlists", playlistController.getAllPlaylists);
router.post("/playlists", playlistController.createPlaylist);

module.exports = router;
