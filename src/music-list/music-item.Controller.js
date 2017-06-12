class MusicItemController {
  constructor($document) {
    'ngInject';

    // this.$onInit =$onInit;
    //  debugger
    //     var modal = $document.getElementById('myModal');
    //     var btn = document.getElementById("myBtn");
    //     var span = document.getElementsByClassName("close")[0];

    //     // When the user clicks on the button, open the modal
    //     btn.onclick = () => {

    //       this.openModal(modal);
    //     }

    //     // When the user clicks on <span> (x), close the modal
    //     span.onclick = () => {
    //       this.closeModal(modal);
    //     }
  }

  $onInit() {
    // debugger
    /* eslint-disable angular/document-service */
    var modal = document.getElementById('myModal');
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
