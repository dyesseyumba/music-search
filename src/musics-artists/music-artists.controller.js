/**
 * The music Artists controller
 *
 * @class MusicArtistsController
 */
class MusicArtistsController {
  constructor(ApiFactory, JWT) {
    'ngInject';

    this._ApiFactory = ApiFactory;
    this._JWT = JWT;

    this.artist = {
      images: []
    }
    this.albums = [];
  }

  /**
   *  Called whenever one-way bindings are updated
   *
   * @param {objecct} changesObj
   *
   * @memberof MusicArtistsController
   */
  $onChanges(changesObj) {

    if (changesObj.artistId) {
      this.artistModal = document.getElementById('music-artist');

      if (changesObj.artistId.currentValue !== "" && changesObj.artistId.previousValue !== changesObj.artistId.currentValue) {

        this.loadArtistDetails();

        this.loadArtistAlbums();
      }
    }
  }

  /**
   * Close the modal
   *
   * @memberof MusicArtistsController
   */
  closeModal() {
    this.artistModal.style.display = "none";

    document.body.style.overflow = "auto";
  }

  /**
   * Load the artist details from spotify API
   *
   * @memberof MusicArtistsController
   */
  loadArtistDetails() {

    this._ApiFactory.getArtistDetails(this.artistId).query({}, (response) => {

      this.artist = {
        name: response.name,
        images: response.images
      }
    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });

  }

  /**
   * Load the album details from spotify api
   *
   * @memberof MusicArtistsController
   */
  loadArtistAlbums() {
    this._ApiFactory.getArtistAlbums(this.artistId).query({}, (response) => {
      const albums = []

      response.items.forEach((i) => {
        const album = {
          name: i.name,
          images: i.images
        }

        albums.push(album);

        this.albums = albums;
      });

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }
}

export default MusicArtistsController;
