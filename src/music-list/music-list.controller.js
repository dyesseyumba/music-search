/**
 * The music-item's controller
 *
 * @class MusicItemController
 */
class MusicItemController {
  constructor(ApiFactory, JWT) {
    'ngInject';
    this._ApiFactory = ApiFactory;
    this._JWT = JWT;
  }

  /**
   * Initialisation of MusicItemController
   *
   * @memberof MusicItemController
   */
  $onInit() {

    this.spotifyResults = this._ApiFactory.getByArtistOrAlbum('stan').query(undefined, (response) => {

      console.log(response);
    }, (response) => {
      if (response.status === 401 || response.status === 403 || response.status === 419 || response.status === 440)
        this._JWT.login();
    });

    var modal = document.getElementById('music-detail');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    //     // When the user clicks on the button, open the modal
    btn.onclick = () => {
      this.openModal(modal);
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = () => {
      this.closeModal(modal);
    }
  }

  //close the modal
  openModal(modal) {
    modal.style.display = "block";
  }

  //Open the modal
  closeModal(modal) {
    modal.style.display = "none";
  }
}

export default MusicItemController;
