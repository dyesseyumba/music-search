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
  constructor(AppConstants, $resource, JWT) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$resource = $resource;
    this._JWT = JWT;
  }

  /**
   * Call Spotify API to get artists or album
   *
   * @returns The Spotify API query result
   *
   * @memberof ApiFactory
   */
  getByArtistOrAlbum(value) {
    const url = (value != undefined) ?
      this._AppConstants.getByArtistOrAlbumUri + value + this._AppConstants.spotifyQueryType :
      this._AppConstants.getByArtistOrAlbumUri;
    return this._$resource(url, {}, {
      query: {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this._JWT.get()
        }
      }
    });
  }
}

export default ApiFactory;
