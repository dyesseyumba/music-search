class MusicArtistsController {
  constructor(ApiFactory, JWT) {
    'ngInject';

    this._ApiFactory = ApiFactory;
    this._JWT = JWT;

    this.artist = {
      images: []
    }
  }

  $onChanges() {
    this.artistModal = document.getElementById('music-artist');

    if (this.itemId !== null && this.itemId !== "") {
      this.loadArtistDetails();

      this.loadArtistAlbums();
    }
  }

  //Close the modal
  closeModal() {
    console.log(this.itemId)
    this.artistModal.style.display = "none";

    document.body.style.overflow = "auto";
  }

  loadArtistDetails() {

    this._ApiFactory.getArtistDetails(this.itemId).query({}, (response) => {

      this.artist = {
        name: response.name,
        images: response.images
      }
    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });

  }

  loadArtistAlbums() {
    this._ApiFactory.getArtistAlbums(this.itemId).query({}, (response) => {


      console.log(response);

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }
}

export default MusicArtistsController;
