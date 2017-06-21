import MusicAlbumsController from './music-albums.controller';
import MusicAlbumsComponent from './music-albums.component'
import MusicListTemplate from '../music-list/music-list.html';
import MusicAlbumsTemplate from './music-albums.html';

/* eslint-disable no-undef */

//Test the musicAlbums component
describe('MusicAlbums', () => {
  let makeController;

  beforeEach(angular.mock.module('app'));
  beforeEach(angular.mock.inject((_ApiFactory_, _JWT_) => {
    makeController = () => {
      return new MusicAlbumsController(_ApiFactory_, _JWT_);
    };
  }));

  //Component specs
  describe('MusicListComponent', () => {

    const component = MusicAlbumsComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(MusicAlbumsTemplate);
    });

    it("includes controller named 'MusicAlbumsController'", () => {
      expect(component.controller).toEqual('MusicAlbumsController');
    })

    it("includes albumId binding", () => {
      expect(component.bindings.albumId).toEqual('@');
    })
  });

  //Controller specs
  describe('MusicAlbumsController', function () {

    beforeAll(function () {
      var template = MusicListTemplate;

      document.body.insertAdjacentHTML(
        'afterbegin',
        template);
    });

    it('MusicAlbumsController should be defined', function () {
      let musicAlbumsController = makeController();

      expect(musicAlbumsController).toBeDefined();
    });

    it('$onChange should be defined', function () {
      let musicAlbumsController = makeController();
      const changesObj = {
        albumId: {
          previousValue: "",
          currentValue: "4nmmSzq9V6UEn0j3KL6jSn"
        }
      }
      musicAlbumsController.$onChanges(changesObj);

      expect(musicAlbumsController.$onChanges).toBeDefined();
    });

    it('Should close album modal', function () {

      let musicAlbumsController = makeController();

      musicAlbumsController.albumModal = document.getElementById('music-album');
      musicAlbumsController.closeModal();

      expect(musicAlbumsController.albumModal.style.display).toEqual('none');
    });

    it('convertToMinutesSeconds should return readable minutes and seconds', () => {

      let musicAlbumsController = makeController();

      expect(musicAlbumsController.convertToMinutesSeconds(307952)).toEqual("5:08");
      expect(musicAlbumsController.convertToMinutesSeconds(310952)).toEqual("5:11");

    });
  });

  Test all call from ApiFactory
  describe('APIfactory', () => {
    let $httpBackend, AppConstants;

    beforeEach(angular.mock.inject(function (_$httpBackend_, _AppConstants_) {
      $httpBackend = _$httpBackend_;

      AppConstants = _AppConstants_;
    }));

    it('Should Call spotify Api to load album  details', function () {

      $httpBackend.expectGET(AppConstants.getAlbumDetails + '4RnBFZRiMLRyZy0AzzTg2C')
        .respond(require('../_mocks/album.json'));

      let musicAlbumsController = makeController();

      musicAlbumsController.albumId = '4RnBFZRiMLRyZy0AzzTg2C';
      musicAlbumsController.loadAlbumDetails();

      expect(musicAlbumsController.loadAlbumDetails).toBeDefined();
      expect(musicAlbumsController.album).toEqual({
        images: []
      });

      $httpBackend.flush();
      expect(musicAlbumsController.album.name).toEqual("Run The Jewels");
    });

    it('Should Call spotify Api to load album details', function () {
      let musicAlbumsController = makeController();



      $httpBackend.whenGET(AppConstants.getAlbumDetails + '4RnBFZRiMLRyZy0AzzTg2C/albums')
        .respond(require('../_mocks/albumAlbums.json'));

      $httpBackend.whenGET(/https:\/\/api\.spotify\.com\/v1\/albums\/(.+)/)
        .respond(require('../_mocks/album.json'));

      musicAlbumsController.albumId = '4RnBFZRiMLRyZy0AzzTg2C';

      expect(musicAlbumsController.loadAlbumAlbums).toBeDefined();
      expect(musicAlbumsController.albums).toEqual([]);

      musicAlbumsController.loadAlbumAlbums();
      $httpBackend.flush();

      expect(musicAlbumsController.albums.length).toEqual(14);
    });

  });
});
