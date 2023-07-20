const mongoose = require("mongoose");

const databaseName = "spotv";
const dbURL = `mongodb://localhost:27017/${databaseName}`;

const Playlist = require("./models/playlistModel");
const Song = require("./models/songModel");
const Artist = require("./models/artistModel");

const sampleArtists = [
  { name: "Artist 1" },
  { name: "Artist 2" },
  { name: "Artist 3" },
];

const sampleSongs = [
  {
    title: "Song 1",
    artists: [],
    url: "https://spotify.com/songs/song1",
    playcount: 0,
  },
  {
    title: "Song 2",
    artists: [],
    url: "https://spotify.com/songs/song2",
    playcount: 0,
  },
];

const samplePlaylist = {
  title: "Sample Playlist",
  description: "This is a sample playlist.",
  songs: [],
};

async function setupDatabase() {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database.");

    // Create the sample artists, songs, and playlist
    const artists = await Artist.insertMany(sampleArtists);
    sampleSongs[0].artists = [artists[0]._id, artists[1]._id];
    sampleSongs[1].artists = [artists[1]._id, artists[2]._id];
    const songs = await Song.insertMany(sampleSongs);
    samplePlaylist.songs = songs.map((song) => song._id);
    const playlist = await Playlist.create(samplePlaylist);

    console.log("Sample data has been inserted into the database.");

    // Close the database connection
    mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error setting up the database:", error);
  }
}

// Call the setupDatabase function to populate the database
setupDatabase();
