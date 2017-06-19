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
  }



  /**
   * Initialisation of MusicItemController
   *
   * @memberof MusicItemController
   */
  $onInit() {


    this.spotifyResults = this._ApiFactory.getByArtistOrAlbum(this._$stateParams.value).query({}, (response) => {
      // this._ApiFactory.getByArtistOrAlbum().query({}, (response) => {

      const albums = this.matchSpotifyResults(response.albums.items);
      const artists = this.matchSpotifyResults(response.artists.items);

      this.spotifyResults = [...albums, ...artists].sort(this.compareByName);

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });

    this.albumModal = document.getElementById('music-album');
  }

  /**
   * Match the spotify results to the music items
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

  //Open the modal
  openModal(id) {


    this.itemId = id;
    this.albumModal.style.display = "block";
  }

}

export default MusicItemController;
