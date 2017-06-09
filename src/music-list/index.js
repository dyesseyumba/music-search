import angular from 'angular';
import musicList from './music-list.component';
import MusicListCtrl from './music-list.controller';

angular.module('music-list', [])
  .controller('MusicListController', MusicListCtrl)
  .component('musicList', musicList);
