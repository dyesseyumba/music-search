class ApiFactory {
  constructor(AppConstants, $resource) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$resource = $resource;
  }

  getByArtistOrAlbum() {

const results = this._AppConstants.getByArtistOrAlbumUri;

// debugger
    return this._$resource(results);
  }
}

export default ApiFactory;
