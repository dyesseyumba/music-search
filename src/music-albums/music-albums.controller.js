/**
 * The music album controller
 *
 * @class MusicAlbumsController
 */
class MusicAlbumsController {
  constructor(ApiFactory, JWT) {
    'ngInject';

    this._ApiFactory = ApiFactory;
    this._JWT = JWT;

    this.album = {};
    this.tracks = [];
  }

  /**
   * Called whenever one-way bindings are updated
   *
   * @param {object} changesObj
   *
   * @memberof MusicAlbumsController
   */
  $onChanges(changesObj) {

    if (changesObj.albumId) {
      this.albumModal = document.getElementById('music-album');

      if (changesObj.albumId.currentValue !== "" && changesObj.albumId.previousValue !== changesObj.albumId.currentValue) {
        this.loadAlbumsDetails();

        this.loadAlbumTracks();
      }
    }
  }

  /**
   * Load album details from spotify API
   *
   * @memberof MusicAlbumsController
   */
  loadAlbumsDetails() {
    this._ApiFactory.getAlbumDetails(this.albumId).query({}, (response) => {

      this.album = {
        name: response.name,
        images: response.images
      }
    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }

loadAlbumTracks() {
    this._ApiFactory.getAlbumsTracks(this.albumId).query({}, (response) => {

      response.items.forEach((i) => {
        const track = {
          name: i.name,
          images: i.images
        }
        this.tracks.push(track);
      });

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }

  /**
   * Close the album modal
   *
   * @memberof MusicAlbumsController
   */
  closeModal() {
    this.albumModal.style.display = "none";

    document.body.style.overflow = "auto";
  }
}

export default MusicAlbumsController;
