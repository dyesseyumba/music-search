import angular from 'angular';
import 'angular-resource';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-scroll';
import 'angular-toastr';

require ('style-loader!css-loader!../node_modules/angular-toastr/dist/angular-toastr.css');

// Import our app config files
import constants from './core/app.constants';
import appConfig from './core/app.config';
import appRun from './core/app.run';

// Import our app functionality
import './layout';
import './home';
import './music-list';
import './music-albums';
import './musics-artists';
import './services';

// Create and bootstrap application
const requires = [
  'ui.router',
  'app.layout',
  'app.home',
  'app.music-list',
  'app.music-artists',
  'app.music-albums',
  'custom-services',
  'duScroll',
  'ngAnimate',
  'toastr'
];

angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
