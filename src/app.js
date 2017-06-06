import angular from 'angular';
import 'angular-ui-router';

// Create and bootstrap application
const requires = [
  'ui.router'
];

// eslint-disable-next-line no-console
console.log("est webpack");

angular.module('app', requires);
