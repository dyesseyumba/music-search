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
  getByArtistOrAlbum(value, offset) {
    const url = (value != undefined) ?
      this._AppConstants.getByArtistOrAlbumUri + value + this._AppConstants.spotifyQueryType + '&offset=' + offset :
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
  /**
   * Get Detail of a specific album
   *
   * @param {string} id
   *
   * @memberof ApiFactory
   */
  getAlbumDetails(id) {
    const url = this._AppConstants.getAlbumDetails + id;

    this.getDetails(url);
  }

  /**
   * Get details of specific album
   *
   * @param {string} id
   *
   * @memberof ApiFactory
   */
  getArtistDetails(id) {
    const url = this._AppConstants.getArtistDetails + id;

    this.getDetails(url);
  }

  /**
   * Sent Get query to spotify API
   *
   * @param {string} url
   * @returns Http response result from Spotify Api
   *
   * @memberof ApiFactory
   */
  getDetails(url) {
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
