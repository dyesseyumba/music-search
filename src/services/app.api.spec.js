/* eslint-disable no-undef */
describe('Api', () => {
  let
    $httpBackend,
    resultsData = [{
      name: 'Alberta Clarck'
    }],
    ApiFactory,
    AppConstants

  beforeEach(function () {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_$httpBackend_, _ApiFactory_, _AppConstants_) => {
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
    expect(ApiFactory.getByArtistOrAlbum).toBeDefined();
  });

  it('should fetch the phones data from `spotify Api`', function () {
    var results = ApiFactory.getByArtistOrAlbum();

    expect(results).toEqual([]);

    $httpBackend.flush();
    expect(results).toEqual(resultsData);
  });

});
