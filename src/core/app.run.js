/**
 * Initialize application before start
 *
 * @param {any} AppConstants
 * @param {any} $rootScope
 */
const AppRun = ($rootScope, $state, $stateParams) => {
  'ngInject';

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

}

export default AppRun;
