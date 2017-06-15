/* eslint-disable no-undef */
describe('JWT', () => {

  let JWT, $window;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_JWT_, _$window_) => {
    JWT = _JWT_;
    $window = _$window_;
  }))

  describe('JWT', () => {
    it('should have a method login', function () {
      expect(JWT.login).toBeDefined();
    });

    it('should turn an object into a query string', function () {
      expect(JWT.transformQueryString({
        a: 't',
        b: 4,
        c: 'q'
      })).toBe('a=t&b=4&c=q');
    });

    it('should return the spotify-token', () => {

      $window.localStorage['spotify-token'] = 'ABCDEFGHIJKLMNOP';

      const token = JWT.get();

      expect(JWT.get).toBeDefined();

      expect(token).toEqual('ABCDEFGHIJKLMNOP');
    });
  });
});
