module.exports = function (config) {
  config.set({
    basePath: './src',
    files: [
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app.js',
      '**/*.spec.js'
    ],
    preprocessors: {
      '**/*.js': 'coverage'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    frameworks: ['jasmine', 'chai'],
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['mocha', 'coverage'],
    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    singleRun: true,
    concurrency: Infinity
  });
};
