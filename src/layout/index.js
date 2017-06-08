import angular from 'angular';
import jumbotron from './jumbotron.component';

//Define module 'layout' and its component
angular
  .module('layout', [])
  .component('jumbotron', jumbotron);
