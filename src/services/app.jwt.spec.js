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

    it('should set the spotify-token', () => {

      JWT.setAuthToken('ABCDEFGHIJKLMNOP');
      expect(JWT.setAuthToken).toBeDefined();

      expect($window.localStorage['spotify-token']).toEqual('ABCDEFGHIJKLMNOP');
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
