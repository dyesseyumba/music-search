import JumbotronComponent from './jumbotron.component';
import JumbotronTemplate from './jumbotron.html';

/* eslint-disable no-undef */

describe('Jumbotron', () => {
  beforeEach(angular.mock.module('app.layout'));

  //Template specs
  it('includes the intended template', () => {
    const component = JumbotronComponent;
    expect(component.template).toEqual(JumbotronTemplate);
  });
})
