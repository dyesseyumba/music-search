import HomeComponent from './home.component';
import HomeTemplate from './home.html';

/* eslint-disable no-undef */

describe('Home', () => {
  beforeEach(angular.mock.module('app.layout'));

  //Template specs
  it('includes the intended template', () => {
    const component = HomeComponent;
    expect(component.template).toEqual(HomeTemplate);
  });
})
