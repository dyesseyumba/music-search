const template = require('./music-artists.html');

// The music artists component
const musicArtists = {
  bindings: {
     artistId: '@'
  },
  template,
  controller: 'MusicArtistsController'
}

export default musicArtists;
