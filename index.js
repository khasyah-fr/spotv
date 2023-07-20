const express = require("express");
const mongoose = require("mongoose");
const playlistRoutes = require("./routes/playlistRoutes");
const songRoutes = require("./routes/songRoutes");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/spotv", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use(playlistRoutes);
app.use(songRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
