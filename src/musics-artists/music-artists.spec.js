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
  });
});
