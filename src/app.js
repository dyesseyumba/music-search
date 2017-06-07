import angular from 'angular';
import 'angular-ui-router';

// Create and bootstrap application
const requires = [
  'ui.router'
];


/* eslint-disable angular/document-service */
var img = document.createElement('img');
img.src = require('./images/gl-logo@2x.png');

angular.module('app', requires);
