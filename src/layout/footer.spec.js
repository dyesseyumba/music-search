import FooterComponent from './footer.component';
import FooterTemplate from './footer.html';

/* eslint-disable no-undef */

describe('Footer', () => {
  beforeEach(angular.mock.module('app.layout'));

  //Template specs
  it('includes the intended template', () => {
    const component = FooterComponent;
    expect(component.template).toEqual(FooterTemplate);
  });
})
