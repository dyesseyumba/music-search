/**
 * Init configuration of the whole app
 *
 * @param {any} $stateProvider
 * @param {any} $urlRouterProvider
 * @param {any} $locationProvider
 */
const AppConfig = (AppConstants, $stateProvider, $urlRouterProvider) => {
  'ngInject';

  const homeState = {
    name: 'home',
    url: '/',
    component: 'home',
    data: {
      pageTitle: 'Home - ' + AppConstants.appName
    }
  }

  // const musicListState = {
  //   name: 'musicList',
  //   url: '/search/{value}',
  //   component: 'musicList',
  //   data: {
  //     pageTitle: 'Search - ' + AppConstants.appName
  //   }
  // }


  $stateProvider.state(homeState);
  // $stateProvider.state(musicListState);

  $urlRouterProvider.otherwise('/');

}

export default AppConfig;
