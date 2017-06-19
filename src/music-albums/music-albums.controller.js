class MusicAlbumsController {
  constructor() {
    'ngInject';
  }

  $onInit() {
    this.albumModal = document.getElementById('music-album');
  }

  //Close the modal
  closeModal() {

    console.log(this.itemId)
    this.albumModal.style.display = "none";
  }
}

export default MusicAlbumsController;
