class JumbotronController {
  constructor($location, $anchorScroll) {
    'ngInject';
    this._$location = $location;
    this._$anchorScroll = $anchorScroll;
  }

  goToBottom() {
    this._$location.hash('bottom');

    this._$anchorScroll();

  }
}

export default JumbotronController;
