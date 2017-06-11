import angular from 'angular';
import musicList from './music-list.component';
import MusicListCtrl from './music-list.controller';
import musicItem from './music-item.component';

//Create 'music-list' module
angular.module('music-list', []);

//Create musicList component;
angular.module('music-list', [])
  .controller('MusicListController', MusicListCtrl)
  .component('musicList', musicList);

//Create musicItem component
angular.module('music-list')
  .component('musicItem', musicItem);
