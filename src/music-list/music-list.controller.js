/**
 * The music-item's controller
 *
 * @class MusicItemController
 */
class MusicItemController {
  constructor(ApiFactory) {
    'ngInject';
    this._ApiFactory = ApiFactory;
  }

  /**
   * Initialisation of MusicItemController
   *
   * @memberof MusicItemController
   */
  $onInit() {

    this.spotifyResults = this._ApiFactory.getByArtistOrAlbum().query();

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
