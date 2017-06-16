//Constants of whole application
const AppConstants = {
  appName: 'Music Search',
  // getByArtistOrAlbumUri: require('file-loader!../_results/results.json'),
  getByArtistOrAlbumUri: 'https://api.spotify.com/v1/search?query=',
  spotifyQueryType: '&type=album,artist',
  getBearerToken: 'https://accounts.spotify.com/api/token',
  redirectUri: 'http://localhost:3001/#!/callback',
  jwtKey: 'spotify-token',

}

export default AppConstants;
