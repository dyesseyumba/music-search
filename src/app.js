import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';

// Import our app config files
import constants from './core/app.constants';
import appConfig from './core/app.config';
import appRun from './core/app.run';

// Import our app functionality
import './layout';
import './music-list';
import './services';

// Create and bootstrap application
const requires = [
  'ui.router',
  'layout',
  'music-list',
  'custom-services'
];

angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
