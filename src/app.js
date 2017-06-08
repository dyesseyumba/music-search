import angular from 'angular';
import 'angular-ui-router';

// Import our app functionality
import './layout';

// Create and bootstrap application
const requires = [
  'ui.router',
  'layout'
];

angular.module('app', requires);
