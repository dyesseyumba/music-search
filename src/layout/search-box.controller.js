class SearchBoxController {
  constructor($state) {
    'ngInject';

    this._$state = $state;
  }

  submitSearch() {
    this._$state.go('musicList',{value:this.search.value});
  }
}

export default SearchBoxController;
