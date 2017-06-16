class JWT {
  constructor(AppConstants, $window, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
    this._$http = $http;
    this._$q = $q;
  }

  /**
   * Open the login dialog
   *
   * @param {any} uri
   * @param {any} name
   * @param {any} options
   * @param {any} cb :the defer method
   * @returns the spotify login dialog
   *
   * @memberof JWT
   */
  openDialog(uri, name, options, cb) {
    var win = this._$window.open(uri, name, options);
    var interval = this._$window.setInterval(function () {
      try {
        if (!win || win.closed) {
          this._$window.clearInterval(interval);
          cb(win);
        }
      } catch (e) {
        win.close()
      }
    }, 1000);
    return win;
  }

  /**
   * Login to Spotify API
   *
   * @returns
   *
   * @memberof JWT
   */
  login() {
    let deferred = this._$q.defer();
    let that = this;

    const
      w = 400,
      h = 500,
      left = (screen.width / 2) - (w / 2),
      top = (screen.height / 2) - (h / 2);

    const params = {
      client_id: 'f09d6b38ae244bef8defb2ae318d4ca7',
      redirect_uri: this._AppConstants.redirectUri,
      response_type: 'token'
    };

    let authCompleted = false;
    let authWindow = this.openDialog(
      'https://accounts.spotify.com/authorize?' + this.transformQueryString(params), 'Spotify',
      'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=' + w + ',height=' + h + ',top=' + top + ',left=' + left,
      () => {
        if (!authCompleted) {
          deferred.reject();
        }
      }
    );

    function storageChanged(e) {

      if (e.key === 'spotify-token') {
        if (authWindow) {
          authWindow.close();
        }
        authCompleted = true;

        that.setAuthToken(e.newValue);
        this._$window.removeEventListener('storage', storageChanged, false);

        deferred.resolve(e.newValue);
      }
    }

    this._$window.addEventListener('storage', storageChanged, false);

    return deferred.promise;
  }

  /**
   * Transform object to query variable
   *
   * @param {any} obj
   * @returns Queries variable
   *
   * @memberof JWT
   */
  transformQueryString(obj) {
    var str = [];
    for (var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  }

  setAuthToken(authToken) {
    this._$window.localStorage[this._AppConstants.jwtKey] = authToken;
  }


  /**
   * Get the jeton web token
   *
   * @returns the JWT
   *
   * @memberof JWT
   */
  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }
}

export default JWT;
