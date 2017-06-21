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

  //Template specs
  describe('MusicListTemplate', () => {

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
      musicListController.$onInit();

      expect(musicListController.loadNextArtistsOrAlbums).toBeDefined();
    });


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
