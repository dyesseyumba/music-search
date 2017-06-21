/**
 * The music-item's controller
 *
 * @class MusicItemController
 */
class MusicItemController {
  constructor(ApiFactory, JWT, $stateParams) {
    'ngInject';
    this._ApiFactory = ApiFactory;
    this._JWT = JWT;
    this._$stateParams = $stateParams;

    this.musicRange = [];
    this.spotifyResults = [];
    this.page = 0;
    this.modal = {};
  }



  /**
   * Initialisation of MusicItemController
   *
   * @memberof MusicItemController
   */
  $onInit() {

    this.loadArtistsOrAlbums(0);
  }

  /**
   * Open artist or album modal
   *
   * @param {string} id
   * @param {string} type
   *
   * @memberof MusicItemController
   */
  openModal(id, type) {
    const modalId = type === "artist" ? "music-artist" : "music-album";

    this.modal = document.getElementById(modalId);
    this.artistId = type === "artist" ? id : "";
    this.albumId = type === "album" ? id : "";
    this.modal.style.display = "block";
    document.body.style.overflow = "hidden";
  }

  /**
   * Call next artist or albums from spotify api
   *
   * @memberof MusicItemController
   */
  loadNextArtistsOrAlbums() {
    this.page++;
    this.loadArtistsOrAlbums(this.page * 6);
  }

  /**
   * Call spotify Api to load artist or albums
   *
   * @param number offset
   *
   * @memberof MusicItemController
   */
  loadArtistsOrAlbums(offset) {
    this._ApiFactory.getByArtistOrAlbum(this._$stateParams.value, offset).query({}, (response) => {

      const albums = this.matchSpotifyResults(response.albums.items);
      const artists = this.matchSpotifyResults(response.artists.items);

      this.musicRange = [...albums, ...artists].sort(this.compareByName);
      this.spotifyResults = [...this.spotifyResults, ...this.musicRange];

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }

  /**
   * Match and format the spotify results to use it in the DOM
   *
   * @param {any} results
   * @returns Matched result
   *
   * @memberof MusicItemController
   */
  matchSpotifyResults(results) {

    const items = [];

    results.forEach((a) => {

      const r = {
        id: a.id,
        name: a.name,
        type: a.type,
        images: a.images
      }

      items.push(r);
    });
    return items;
  }

  /**
   * Compare two music item to sort
   *
   * @param {any} result a
   * @param {any} result b
   * @returns comparison result
   *
   * @memberof MusicItemController
   */
  compareByName(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

}

export default MusicItemController;
