import angular from 'angular';
import musicList from './music-list.component';
import MusicListCtrl from './music-list.controller';
import musicItem from './music-item.component';
import musicAlbum from './music-album.component';
import MusicItemCtrl from './music-item.Controller';

//Create 'music-list' module
angular.module('music-list', []);

//Create musicList component;
angular.module('music-list', [])
  .controller('MusicListController', MusicListCtrl)
  .component('musicList', musicList);

//Create musicItem component
angular.module('music-list')
  .controller('MusicItemController', MusicItemCtrl)
  .component('musicItem', musicItem);

//Create musicAlbum component
angular.module('music-list')
  .component('musicAlbum', musicAlbum);
