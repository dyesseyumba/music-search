describe('Music Search Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:3001');

    expect(browser.getTitle()).toEqual('Home - Music Search');
  });
});
