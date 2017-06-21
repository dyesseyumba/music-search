import SearchBoxController from './search-box.controller'
import SearchBoxComponent from './search-box.component';
import SearchBoxTemplate from './search-box.html';

/* eslint-disable no-undef */

//Tests of SearchBox component
describe('SearchBox', () => {

  let makeController;


  beforeEach(angular.mock.module('app.layout'));
  beforeEach(inject(() => {
    makeController = () => {
      return new SearchBoxController();
    };
  }));

  //Template specs
  describe('SearchBoxTemplate', () => {

    const component = SearchBoxComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(SearchBoxTemplate);
    });

    it("includes controller named 'SearchBoxController'", () => {
      expect(component.controller).toEqual('SearchBoxController');
    })
  });

  //Controller specs
  describe('SearchBoxController', function () {

    it('submitSearch should be defined', function () {
      let searchBoxController = makeController();

      expect(searchBoxController).toBeDefined();
      expect(searchBoxController.submitSearch).toBeDefined();
    })

  });
});
