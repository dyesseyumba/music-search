import angular from 'angular';
import ApiFactory from './app.api';
import Jwt from './app.jwt';

// Create the module where our functionality can attach to
angular.module('custom-services', ['ngResource']);

//Create the factory ApiFactory
angular.module('custom-services')
  .factory('ApiFactory', ['AppConstants', '$resource', 'JWT', (AppConstants, $resource, JWT) => new ApiFactory(AppConstants, $resource, JWT)]);

/* eslint-disable angular/no-service-method  */
angular.module('custom-services')
  .service('JWT', Jwt);
