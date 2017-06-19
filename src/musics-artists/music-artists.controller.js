class MusicArtistsController {
  constructor(ApiFactory, JWT) {
    'ngInject';

    this._ApiFactory = ApiFactory;
    this._JWT = JWT;
  }

  $onInit() {
    this.artistModal = document.getElementById('music-artist');

  //   this._ApiFactory.getArtistDetails(this.itemId).query({}, (response) => {

  //     const artists = this.matchSpotifyResults(response.artists.items);
  //     const artists = this.matchSpotifyResults(response.artists.items);

  //     this.musicRange = [...artists, ...artists].sort(this.compareByName);
  //     this.spotifyResults = [...this.spotifyResults, ...this.musicRange];

  //   }, (response) => {
  //     if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
  //       this._JWT.login();
  //   });
  }

  //Close the modal
  closeModal() {
debugger
    console.log(this.itemId)
    this.artistModal.style.display = "none";

    document.body.style.overflow = "auto";
  }
}

export default MusicArtistsController;
