import angular from 'angular';
import jumbotron from './jumbotron.component';
import searchBox from './search-box.component';

//Define module 'layout' and its component
angular
  .module('layout', [])
  .component('jumbotron', jumbotron)
  .component('searchBox', searchBox);
