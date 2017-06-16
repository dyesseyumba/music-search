class SearchBoxController {
  constructor($state, JWT, ApiFactory) {
    'ngInject';

    this._$state = $state;
    this._JWT = JWT;
    this._ApiFactory = ApiFactory;
  }

  submitSearch() {
    // this._$state.go('musicList',{value:this.search.value});
    this._JWT.login();
  }
}

export default SearchBoxController;
