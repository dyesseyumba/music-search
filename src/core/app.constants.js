//Constants of whole application
const AppConstants = {
  appName: 'Music Search',
  // getByArtistOrAlbumUri: require('file-loader!../_mocks/results.json'),
  getByArtistOrAlbumUri: 'https://api.spotify.com/v1/search?query=',
  spotifyQueryType: '&type=album,artist&limit=6',
  getAlbumDetails: 'https://api.spotify.com/v1/albums/',
  getArtistDetails: 'https://api.spotify.com/v1/artists/',
  getBearerToken: 'https://accounts.spotify.com/api/token',
  redirectUri: process.env.NODE_ENV === 'production' ? 'https://sleepy-island-87400.herokuapp.com' : 'http://localhost:3001',
  jwtKey: 'spotify-token',

}

export default AppConstants;
