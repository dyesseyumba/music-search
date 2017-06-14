class JWT {
  constructor(AppConstants, $window, $http) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$window = $window;
    this._$http = $http;
  }

  save() {
    this._$http({
        method: 'POST',
        url: this._AppConstants.getBearerToken,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ZjA5ZDZiMzhhZTI0NGJlZjhkZWZiMmFlMzE4ZDRjYTc6YzRlZDM1OGEwYjFlNGMzNzhkYzUwYjA3ZWI2ZmI0Yjk='
        },
        data: 'grant_type=client_credentials'
      })
      .success(function (data, status, headers, config) {
        this._$window.localStorage[this._AppConstants.jwtKey] = data.access_token;
      })
      .error(function () {
        this.destroy();
      });
  }

  get() {
    return this._$window.localStorage[this._AppConstants.jwtKey];
  }

  destroy() {
    this._$window.localStorage.removeItem(this._AppConstants.jwtKey);
  }
}

export default JWT;
