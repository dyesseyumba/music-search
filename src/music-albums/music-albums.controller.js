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

  /**
   * Load tracks of specifics albums from spotify API
   *
   * @memberof MusicAlbumsController
   */
  loadAlbumTracks() {
    this._ApiFactory.getAlbumsTracks(this.albumId).query({}, (response) => {

      const tracks = [];
      response.items.forEach((i) => {
        const track = {
          name: i.name,
          images: i.images,
          duration: this.convertToMinutesSeconds(i.duration_ms)
        }
        tracks.push(track);
      });
      this.tracks = tracks;

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

  /**
   * Convert milliseconds to minutes secondes
   *
   * @param {number} milliSeconds
   * @returns String of readable minutes seconds
   * @memberof MusicAlbumsController
   */
  convertToMinutesSeconds(milliSeconds) {
    var minutes = Math.floor(milliSeconds / 60000);
    var seconds = ((milliSeconds % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}

export default MusicAlbumsController;
