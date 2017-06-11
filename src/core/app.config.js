/**
 * Init configuration of the whole app
 *
 * @param {any} $stateProvider
 * @param {any} $urlRouterProvider
 * @param {any} $locationProvider
 */
const AppConfig = (AppConstants, $stateProvider, $urlRouterProvider) => {
  'ngInject';

  const musicListState = {
    name: 'musicList',
    url: '/',
    component: 'musicList',
    data: {
      pageTitle: 'Home - ' + AppConstants.appName
    }
  }

  const musicItemState = {
    name: 'musicItem',
    url: '/search',
    component: 'musicItem',
    data: {
      pageTitle: 'Search - ' + AppConstants.appName
    }
  }


  $stateProvider.state(musicListState);
  $stateProvider.state(musicItemState);

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
