/* eslint-disable no-undef */
describe('Api', () => {
  let
    $httpBackend,
    resultsData = [{
      name: 'Alberta Clarck'
    }],
    AppConstants,
    ApiFactory;

  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_$httpBackend_, _AppConstants_, _ApiFactory_) => {
    $httpBackend = _$httpBackend_;

    AppConstants = _AppConstants_;

    $httpBackend.expectGET(AppConstants.getByArtistOrAlbumUri).respond(resultsData);

    ApiFactory = _ApiFactory_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('Should have a method getByArtistOrAlbum', () => {
    expect(ApiFactory.getByArtistOrAlbum().query()).toBeDefined();
  });

  it('should fetch the phones data from `spotify Api`', function () {
    console.info('results');
    console.info(ApiFactory.getByArtistOrAlbum);

    var results = ApiFactory.getByArtistOrAlbum().query();


    console.info('results: '+results);

    expect(results).toEqual([]);

    $httpBackend.flush();
    expect(results).toEqual(resultsData);
  });

});
