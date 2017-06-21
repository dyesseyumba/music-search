import MusicArtistsController from './music-artists.controller';
import MusicArtistsComponent from './music-artists.component'
import MusicListTemplate from '../music-list/music-list.html';
import MusicArtistsTemplate from './music-artists.html';

/* eslint-disable no-undef */

//Test the musicArtists component
describe('MusicArtists', () => {
  let makeController;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject((_ApiFactory_, _JWT_) => {
    makeController = () => {
      return new MusicArtistsController(_ApiFactory_, _JWT_);
    };
  }));

  //Component specs
  describe('MusicListComponent', () => {

    const component = MusicArtistsComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(MusicArtistsTemplate);
    });

    it("includes controller named 'MusicArtistsController'", () => {
      expect(component.controller).toEqual('MusicArtistsController');
    })

    it("includes artistId binding", () => {
      expect(component.bindings.artistId).toEqual('@');
    })
  });

  //Controller specs
  describe('MusicArtistsController', function () {

    beforeAll(function () {
      var template = MusicListTemplate;

      document.body.insertAdjacentHTML(
        'afterbegin',
        template);
    });

    it('MusicArtistsController should be defined', function () {
      let musicArtistsController = makeController();

      expect(musicArtistsController).toBeDefined();
    });

    it('$onChange should be defined', function () {
      let musicArtistsController = makeController();
      const changesObj = {
        artistId: {
          previousValue: "",
          currentValue: "4nmmSzq9V6UEn0j3KL6jSn"
        }
      }
      musicArtistsController.$onChanges(changesObj);

      expect(musicArtistsController.$onChanges).toBeDefined();
    });

    it('Should close artist modal', function () {

      let musicArtistsController = makeController();

      musicArtistsController.artistModal = document.getElementById('music-artist');
      musicArtistsController.closeModal();

      expect(musicArtistsController.artistModal.style.display).toEqual('none');
    });

    it('filterByName should return boolean', () => {

      let musicArtistsController = makeController();

      const album = {
        name: 'Rise and fall'
      }

      const array = [album, {
        name: 'Go and run'
      }];

      expect(musicArtistsController.filterByName(album, 1, array)).toBe(false);
      expect(musicArtistsController.filterByName(album, 0, array)).toBe(true);

    });
  });

  //Test all call from ApiFactory
  describe('APIfactory', () => {
    let $httpBackend, AppConstants;

    beforeEach(angular.mock.inject(function (_$httpBackend_, _AppConstants_) {
      $httpBackend = _$httpBackend_;

      AppConstants = _AppConstants_;
    }));

    it('Should Call spotify Api to load artist  details', function () {

      $httpBackend.expectGET(AppConstants.getArtistDetails + '4RnBFZRiMLRyZy0AzzTg2C')
        .respond(require('../_mocks/artist.json'));

      let musicArtistsController = makeController();

      musicArtistsController.artistId = '4RnBFZRiMLRyZy0AzzTg2C';
      musicArtistsController.loadArtistDetails();

      expect(musicArtistsController.loadArtistDetails).toBeDefined();
      expect(musicArtistsController.artist).toEqual({
        images: []
      });

      $httpBackend.flush();
      expect(musicArtistsController.artist.name).toEqual("Run The Jewels");
    });

    it('Should Call spotify Api to load album details', function () {
      let musicArtistsController = makeController();



      $httpBackend.whenGET(AppConstants.getArtistDetails + '4RnBFZRiMLRyZy0AzzTg2C/albums')
        .respond(require('../_mocks/artistAlbums.json'));

      $httpBackend.whenGET(/https:\/\/api\.spotify\.com\/v1\/albums\/(.+)/)
        .respond(require('../_mocks/album.json'));

      musicArtistsController.artistId = '4RnBFZRiMLRyZy0AzzTg2C';

      expect(musicArtistsController.loadArtistAlbums).toBeDefined();
      expect(musicArtistsController.albums).toEqual([]);

      musicArtistsController.loadArtistAlbums();
      $httpBackend.flush();

      expect(musicArtistsController.albums.length).toEqual(14);
    });

  });
});
