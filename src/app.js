import angular from 'angular';
import 'angular-ui-router';

// Import our app config files
import appConfig from './core/app.config';

// Import our app functionality
import './layout';
import './music-list';

// Create and bootstrap application
const requires = [
  'ui.router',
  'layout',
  'music-list'
];

angular.module('app', requires);

angular.module('app').config(appConfig);
