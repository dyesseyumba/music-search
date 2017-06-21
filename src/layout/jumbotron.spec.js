import JumbotronComponent from './jumbotron.component';
import JumbotronTemplate from './jumbotron.html';
import JumbotronController from './jumbotron.controller';

/* eslint-disable no-undef */

describe('Jumbotron', () => {

  let makeController;

  beforeEach(angular.mock.module('app.layout'));

  beforeEach(inject((_$document_, _$anchorScroll_) => {
    makeController = () => {
      return new JumbotronController(_$document_, _$anchorScroll_);
    };
  }));

  //Template specs
  describe('JumbotronComponent', () => {
    const component = JumbotronComponent;
    it('includes the intended template', () => {
      expect(component.template).toEqual(JumbotronTemplate);
    });

    it('includes the controller JumbotronController', () => {
      expect(component.controller).toEqual('JumbotronController');
    });
  });

  //Controller specs
  describe('JumbotronController', () => {
    it('Should contains goToBottom method', () => {
      const controller = makeController();

      expect(controller.goToBottom).toBeDefined();
    });
  });
})
