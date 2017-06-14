const template = require('./search-box.html');

const searchBox = {
  bindings: {
    search: '<'
  },
  template,
  controller: 'SearchBoxController'
}

export default searchBox;
