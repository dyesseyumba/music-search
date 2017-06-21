import angular from 'angular';
import musicAlbums from './music-albums.component';
import musicAlbumsController from './music-albums.controller';

//Create musicAlbums component
angular.module('app.music-albums', [])
  .controller('MusicAlbumsController', musicAlbumsController)
  .component('musicAlbums', musicAlbums);
