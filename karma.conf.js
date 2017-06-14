module.exports = function (config) {
  config.set({
    basePath: './src',
    files: [
      '../node_modules/angular/angular.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      './app.js',
      '**/*.spec.js'
    ],
    preprocessors: {
      '**/*.js': 'karma-babel'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    reporters: ['mocha'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-mocha-reporter'

    ],
    singleRun: true,
    concurrency: Infinity
  });
};
