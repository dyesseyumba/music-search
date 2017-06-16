/**
 * Init configuration of the whole app
 *
 * @param {any} $stateProvider
 * @param {any} $urlRouterProvider
 * @param {any} $locationProvider
 */
const AppConfig = (AppConstants, $stateProvider) => {
  'ngInject';


  const homeState = {
    name: 'home',
    url: '/',
    component: 'home',
    data: {
      pageTitle: 'Home - ' + AppConstants.appName
    }
  }

  const musicListState = {
    name: 'musicList',
    url: '/search/{value}',
    component: 'musicList',
    data: {
      pageTitle: 'Search - ' + AppConstants.appName
    }
  }

  const callbackState = {
    name: 'callback',
    url: '/callback',
    component: 'home',
    data: {
      pageTitle: 'Home - ' + AppConstants.appName
    }
  }


  $stateProvider.state(homeState);
  $stateProvider.state(musicListState);
  $stateProvider.state(callbackState);
}

export default AppConfig;
