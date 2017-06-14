// import 'angular-mocks';

describe('SearchBoxController', function () {

  let $compile, $rootScope;

  beforeEach(module('app.layout'));

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('submitSearch should be defined', function () {
    var controller = $controller('SearchBoxController');

    expect(controller).toBeDefined();
    expect(controller.submitSearch).toBeDefined();
  })

});
