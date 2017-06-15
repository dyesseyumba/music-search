

import SearchBoxController from './search-box.controller'
import SearchBoxComponent from './search-box.component';
import SearchBoxTemplate from './search-box.html';

describe('SearchBox', ()=>{


  let $rootScope, makeController;


  beforeEach(angular.mock.module('app.layout'));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SearchBoxController();
    };
  }));

    describe('SearchBoxComponent', () => {

      let component = SearchBoxComponent;

      console.info(SearchBoxTemplate);

      it('includes the intended template',() => {
        expect(component.template).toEqual(SearchBoxTemplate);
      });

      // it('invokes the right controller', () => {
      //   expect(component.controller).to.equal(HomeController);
      // });
  });

});

// describe('SearchBoxController', function () {

//   let $compile, $rootScope;

//   beforeEach(mocks.module('app.layout'));

//   beforeEach(inject(function (_$controller_) {
//     $controller = _$controller_;
//   }));

//   it('submitSearch should be defined', function () {
//     var controller = $controller('SearchBoxController');

//     expect(controller).toBeDefined();
//     expect(controller.submitSearch).toBeDefined();
//   })

// });
