/**
 * Initialize application before start
 *
 * @param {any} AppConstants
 * @param {any} $rootScope
 */
const AppRun = ($rootScope, $state, $stateParams, JWT) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

// Save the JWT in the localStorage
  JWT.save();
}

export default AppRun;
