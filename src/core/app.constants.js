//Constants of whole application
const AppConstants = {
  appName: 'Music Search',
  getByArtistOrAlbumUri: require('file-loader!../_results/results.json'),
  getBearerToken: 'https://accounts.spotify.com/api/token',
  jwtKey: 'jwtToken',

}

export default AppConstants;
