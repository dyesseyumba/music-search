/* eslint-disable no-undef */
describe('JWT', () => {

  let JWT, AppConstants;

  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject((_JWT_, _AppConstants_) => {
    JWT = _JWT_;
    AppConstants = _AppConstants_;
  }))

  describe('JWT', () => {
    it('should have a method login', function () {
      expect(JWT.login).toBeDefined();
    });

    it('login should return a defined promise', () => {
      JWT.login().then((result) => {
        expect(result).toBeDefined();
        done();
      });
    });

    it('should turn an object into a query string', function () {
      expect(JWT.transformQueryString({
        a: 't',
        b: 4,
        c: 'q'
      })).toBe('a=t&b=4&c=q');
    });

    it('should return the spotify-token', () => {

      localStorage.setItem(AppConstants.jwtKey, 'ABCDEFGHIJKLMNOP');

      const token = JWT.get();

      expect(JWT.get).toBeDefined();

      expect(token).toEqual('ABCDEFGHIJKLMNOP');
    });

    it('should set the spotify-token', () => {

      JWT.setAuthToken('ABCDEFGHIJKLMNOP');
      expect(JWT.setAuthToken).toBeDefined();

      expect(localStorage.getItem(AppConstants.jwtKey)).toEqual('ABCDEFGHIJKLMNOP');
    });

    it('should have a method openDialog', () => {

      const win = JWT.openDialog(
        'http://localhost300:?', 'Spotify', 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no',
        () => {
          $q.defer().reject();
        }

      );

      expect(JWT.openDialog).toBeDefined();
      expect(win).toBeDefined();
      expect(win.closed).toEqual(false);
    });
  });
});
