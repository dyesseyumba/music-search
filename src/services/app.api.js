/**
 * The Api factory class. Thats will call all external REST resource
 *
 * @class ApiFactory
 */
class ApiFactory {
  /**
   * Creates an instance of ApiFactory.
   * @param {any} AppConstants
   * @param {any} $resource
   *
   * @memberof ApiFactory
   */
  constructor(AppConstants, $resource) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$resource = $resource;
  }

  /**
   * Call Spotify API to get artists or album
   *
   * @returns The Spotify API query result
   *
   * @memberof ApiFactory
   */
  getByArtistOrAlbum() {
    const results = this._AppConstants.getByArtistOrAlbumUri;
    return this._$resource(results);
  }
}

export default ApiFactory;
