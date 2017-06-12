class ApiFactory {
  constructor(AppConstants, $resource) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$resource = $resource;
  }

  getByArtistOrAlbum() {
    this._$resource('../_results/results.json');
  }
}

export default ApiFactory;
