const template = require('./music-albums.html');

// The music albums component
const musicAlbums = {
  restrict: 'E',
  bindings: {
    onOpenModal: '&'
  },
  template,
  controller: 'MusicAlbumsController'
}

export default musicAlbums;
