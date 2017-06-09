/**
 * Init configuration of the whole app
 *
 * @param {any} $stateProvider
 * @param {any} $urlRouterProvider
 * @param {any} $locationProvider
 */
const AppConfig = ($stateProvider, $urlRouterProvider, $locationProvider) => {
  'ngInject';

  //Remove hash bang routing
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  const musicListState = {
    name: 'musicList',
    url: '/',
    component: 'musicList'
  }

  $stateProvider.state(musicListState);

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
