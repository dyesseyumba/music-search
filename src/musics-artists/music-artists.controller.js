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

  $onChanges() {
    this.artistModal = document.getElementById('music-artist');

    if (this.itemId !== null && this.itemId !== "") {
      this.loadArtistDetails();

      this.loadArtistAlbums();
    }
  }

  //Close the modal
  closeModal() {
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

      response.items.forEach((i) => {
        const album = {
          name: i.name,
          images: i.images
        }
        this.albums.push(album);
      });

    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });
  }
}

export default MusicArtistsController;
