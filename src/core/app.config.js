/**
 * Init configuration of the whole app
 *
 * @param {any} $stateProvider
 * @param {any} $urlRouterProvider
 * @param {any} $locationProvider
 */
const AppConfig = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  //Remove hash bang routing
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });

  const musicListState = {
    name: 'musicList',
    url: '/',
    component: 'musicList',
    data:{title: 'Home'}
  }

  const testState = {
    name: 'testState',
    url: '/test',
    template: '<h1>Test</h1>',
     data:{title: 'Home 2'}
  }

  $stateProvider.state(musicListState);
  $stateProvider.state(testState);

  $urlRouterProvider.otherwise('/');
}

export default AppConfig;
