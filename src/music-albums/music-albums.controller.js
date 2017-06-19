class MusicAlbumsController {
  constructor(ApiFactory, JWT) {
    'ngInject';

    this._ApiFactory = ApiFactory;
    this._JWT = JWT;
  }

  $onInit() {
    this.albumModal = document.getElementById('music-album');

    // this._ApiFactory.getAlbumDetails(this.itemId).query({}, (response) => {

    //   const albums = this.matchSpotifyResults(response.albums.items);
    //   const artists = this.matchSpotifyResults(response.artists.items);

    //   this.musicRange = [...albums, ...artists].sort(this.compareByName);
    //   this.spotifyResults = [...this.spotifyResults, ...this.musicRange];

    // }, (response) => {
    //   if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
    //     this._JWT.login();
    // });
  }

  //Close the modal
  closeModal() {
debugger
    console.log(this.itemId)
    this.albumModal.style.display = "none";

    document.body.style.overflow = "auto";
  }
}

export default MusicAlbumsController;
