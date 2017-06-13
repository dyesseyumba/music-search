import angular from 'angular';
import home from './home.component';
import homeCtrl from './home.controller';

//Create 'music-list' module
angular.module('app.home', []);

//Create musicList component;
angular.module('app.home', [])
  .controller('HomeController', homeCtrl)
  .component('home', home);
