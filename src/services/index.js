import angular from 'angular';
import ApiFactory from './app.api';

// Create the module where our functionality can attach to
angular.module('custom-services', ['ngResource']);



angular.module('custom-services')
.factory('ApiFactory', ApiFactory);
