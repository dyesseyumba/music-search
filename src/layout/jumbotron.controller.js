import angular from 'angular';

/**
 * The controller of Jumbotron component
 *
 * @class JumbotronController
 */
class JumbotronController {
  constructor($document, $anchorScroll) {
    'ngInject';
    this._$document = $document;
    this._$anchorScroll = $anchorScroll;
  }

  /**
   * Go to anchor 'jumotron-line-3'
   *
   * @memberof JumbotronController
   */
  goToBottom() {
    const result = angular.element(document.getElementById('jumotron-line-3'));

    this._$document.scrollToElement(result,0, 1000);
  }
}

export default JumbotronController;
