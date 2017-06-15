import angular from 'angular';
import home from './home.component';

//Create 'music-list' module
angular.module('app.home', [])
  .component('home', home);

