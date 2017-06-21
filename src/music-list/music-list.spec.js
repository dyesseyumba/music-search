import MusicListController from './music-list.controller'
import MusicListComponent from './music-list.component';
import MusicListTemplate from './music-list.html';

/* eslint-disable no-undef */

//Tests of MusicList component
describe('MusicList', () => {

  let makeController;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject((_ApiFactory_, _JWT_, _$stateParams_) => {
    makeController = () => {
      return new MusicListController(_ApiFactory_, _JWT_, _$stateParams_);
    };
  }));

  //Component specs
  describe('MusicListComponent', () => {

    const component = MusicListComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(MusicListTemplate);
    });

    it("includes controller named 'MusicListController'", () => {
      expect(component.controller).toEqual('MusicListController');
    })
  });

  //Controller specs
  describe('MusicListController', function () {

    it('MusicListController should be defined', function () {
      let musicListController = makeController();

      expect(musicListController).toBeDefined();
    });

    it('$onInit should be defined', function () {
      let musicListController = makeController();
      musicListController.$onInit();

      expect(musicListController.$onInit).toBeDefined();
    });

    it('loadNextArtistsOrAlbums should be defined', function () {
      let musicListController = makeController();

      expect(musicListController.loadNextArtistsOrAlbums).toBeDefined();
    });

    it('matchSpotifyResults should be defined', function () {
      let musicListController = makeController();
      const results = require('../_mocks/results.json');

      const albums = musicListController.matchSpotifyResults(results.albums.items);

      expect(musicListController.loadNextArtistsOrAlbums).toBeDefined();
      expect(albums.length).toEqual(6);
    });

    //Test the compareByName method
    describe('compareByName method', () => {
      const a = {
        name: 'Jane Doe'
      }
      const b = {
        name: 'John Doe'
      }

      it('compareByName should return -1', function () {
        let musicListController = makeController();

        const comparisonResult = musicListController.compareByName(a, b);

        expect(musicListController.compareByName).toBeDefined();
        expect(comparisonResult).toEqual(-1);
      });

      it('compareByName should return 1', function () {
        let musicListController = makeController();

        const comparisonResult = musicListController.compareByName(b, a);

        expect(musicListController.compareByName).toBeDefined();
        expect(comparisonResult).toEqual(1);
      });
    });

    //Test all call from ApiFactory
    describe('APIfactory', () => {
      let $httpBackend, AppConstants;

      beforeEach(angular.mock.inject(function (_$httpBackend_, _AppConstants_) {
        $httpBackend = _$httpBackend_;

        AppConstants = _AppConstants_;

        $httpBackend.expectGET(AppConstants.getByArtistOrAlbumUri + 'run' + AppConstants.spotifyQueryType + '&offset=6')
          .respond(require('../_mocks/results.json'));
      }));

      it('Should Call spotify Api to load artist or albums', function () {
        let musicListController = makeController();

        musicListController._$stateParams.value = 'run';
        musicListController.loadArtistsOrAlbums(6);

        expect(musicListController.loadArtistsOrAlbums).toBeDefined();
        expect(musicListController.musicRange).toEqual([]);

        $httpBackend.flush();
        expect(musicListController.musicRange.length).toEqual(12);
      });

      it('loadNextArtistsOrAlbums should increment page variable', () => {

        let musicListController = makeController();
        musicListController.page = 0;
        musicListController._$stateParams.value = 'run';

        musicListController.loadNextArtistsOrAlbums();

        expect(musicListController.page).toEqual(1);
      });

    });

    //Test the artist and album modal
    describe('Album and artist modal', () => {

      beforeAll(function () {
        var template = MusicListTemplate;

        document.body.insertAdjacentHTML(
          'afterbegin',
          template);
      });

      it('openModal should be defined', function () {
        let musicListController = makeController();

        expect(musicListController.openModal).toBeDefined();
      });

      it('Should open artist modal', function () {

        let musicListController = makeController();
        musicListController.openModal("4nmmSzq9V6UEn0j3KL6jSn", "artist")

        expect(musicListController.modal.style.display).toEqual('block');
      });

      it('Should open artist modal', function () {

        let musicListController = makeController();
        musicListController.openModal("4nmmSzq9V6UEn0j3KL6jSn", "album")

        expect(musicListController.modal.style.display).toEqual('block');
      });
    });

  });
});
