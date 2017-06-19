import angular from 'angular';
import musicArtists from './music-artists.component';
import musicArtistsController from './music-artists.controller';

//Create musicArtists component
angular.module('app.music-artists', [])
  .controller('MusicArtistsController', musicArtistsController)
  .component('musicArtists', musicArtists);
