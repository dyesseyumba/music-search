import angular from 'angular';
import musicList from './music-list.component';
import MusicListCtrl from './music-list.controller';

//Create 'music-list' module
angular.module('app.music-list', []);

//Create musicList component;
angular.module('app.music-list', [])
  .controller('MusicListController', MusicListCtrl)
  .component('musicList', musicList);
