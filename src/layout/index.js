import angular from 'angular';
import jumbotron from './jumbotron.component';
import searchBox from './search-box.component';
import result from './result.component';
import appFooter from './footer.component';
import SearchBoxController from './search-box.controller';

//Define module 'layout' and its component
angular
  .module('app.layout', [])
  .component('jumbotron', jumbotron)
  .component('result', result)
  .component('appFooter', appFooter);

angular
  .module('app.layout')
  .controller('SearchBoxController', SearchBoxController)
  .component('searchBox', searchBox)
