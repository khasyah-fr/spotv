# SPOTV

Playlists and songs management API.

Built using Node.js, Express, MongoDB, Mongoose.

# How to run

1. Install dependencies: `npm install express mongoose`
2. Create database on mongodb (default: `spotv`)
3. Populate database: `node setupDatabase.js`
4. Run the app: `node index.js`
5. Import attached Postman collection

## API Endpoints

| Method | Endpoint                               | Description                       |
| ------ | -------------------------------------- | --------------------------------- |
| GET    | `/playlists`                           | Get all playlists                 |
| POST   | `/playlists`                           | Create a new playlist             |
| GET    | `/playlists/:playlistId/songs`         | Get all songs in a playlist       |
| GET    | `/playlists/:playlistId/songs/:songId` | Play song in a playlist           |
| POST   | `/playlists/:playlistId/songs`         | Insert song to a playlist         |
| GET    | `/songs`                               | Get all songs sorted by playcount |

### Request Body Format

- Create a playlist:

  ```json
  {
    "title": "Cafe playlist",
    "description": "Lagu cocok untuk di cafe"
  }
  ```

- Insert song to a playlist:

  ```json
  {
    "title": "Kukira kita asam dan garam",
    "artists": ["64b7e5a1edd5a220a2f4edfa"],
    "url": "https://spotify.com/urlsufkjfhs"
  }
  ```
