const template = require('./music-albums.html');

// The music albums component
const musicAlbums = {
  bindings: {
     itemId: '@'
  },
  template,
  controller: 'MusicAlbumsController'
}

export default musicAlbums;
