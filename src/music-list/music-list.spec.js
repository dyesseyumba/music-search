import MusicListController from './music-list.controller'
import MusicListComponent from './music-list.component';
import MusicListTemplate from './music-list.html';

/* eslint-disable no-undef */

//Tests of MusicList component
describe('MusicList', () => {

  let makeController;


  beforeEach(angular.mock.module('app.layout'));
  beforeEach(inject(() => {
    makeController = () => {
      return new MusicListController();
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

    it('$onInit should be defined', function () {
      let musicListController = makeController();
      musicListController.$onInit();

      expect(musicListController.$onInit).toBeDefined();
    });

    it('openModal should be defined', function () {
      let musicListController = makeController();

      expect(musicListController.openModal).toBeDefined();
    });

    it('Should open the modal', function () {

      let musicListController = makeController();
      const modal = document.getElementById('music-detail');

      musicListController.openModal(modal)

      expect(modal.style.display).toEqual('block');
    });

    it('closeModal should be defined', function () {
      let musicListController = makeController();

      expect(musicListController.closeModal).toBeDefined();
    });



    it('Should close the modal', function () {

      let musicListController = makeController();
      const modal = document.getElementById('music-detail');

      musicListController.closeModal(modal)

      expect(modal.style.display).toEqual('none');
    });

  });
});
