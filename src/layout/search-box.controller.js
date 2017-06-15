class SearchBoxController {
  constructor($state, JWT) {
    'ngInject';

    this._$state = $state;
this._JWT =JWT;
  }

  submitSearch() {
    // this._$state.go('musicList',{value:this.search.value});
    this._JWT.login();
  }
}

export default SearchBoxController;
