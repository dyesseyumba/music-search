import angular from 'angular';
import ApiFactory from './app.api';
import Jwt from './app.jwt';

// Create the module where our functionality can attach to
angular.module('custom-services', ['ngResource']);

//Create the factory ApiFactory
angular.module('custom-services')
  .factory('ApiFactory', ['AppConstants', '$resource', (AppConstants, $resource) => new ApiFactory(AppConstants, $resource)]);

/* eslint-disable angular/no-service-method  */
angular.module('custom-services')
.service('JWT', Jwt);
