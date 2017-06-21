const template = require('./music-albums.html');

// The music albums component
const musicAlbums = {
  bindings: {
     albumId: '@'
  },
  template,
  controller: 'MusicAlbumsController'
}

export default musicAlbums;
