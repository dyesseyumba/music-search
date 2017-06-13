import angular from 'angular';
import jumbotron from './jumbotron.component';
import searchBox from './search-box.component';
import result from './result.component';
import appFooter from './footer.component';

//Define module 'layout' and its component
angular
  .module('app.layout', [])
  .component('jumbotron', jumbotron)
  .component('searchBox', searchBox)
  .component('result', result)
  .component('appFooter', appFooter);
