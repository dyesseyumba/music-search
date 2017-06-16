import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-scroll';

// Import our app config files
import constants from './core/app.constants';
import appConfig from './core/app.config';
import appRun from './core/app.run';

// Import our app functionality
import './layout';
import './home';
import './music-list';
import './music-detail';
import './services';

// Create and bootstrap application
const requires = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.music-list',
  'app.music-detail',
  'custom-services',
  'duScroll'
];

angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
