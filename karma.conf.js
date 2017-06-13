module.exports = function (config) {
  config.set({
    basePath: './src',
    files: [
      '**/*.spec.js'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    frameworks: ['mocha', 'chai'],

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
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    singleRun: true,
    concurrency: Infinity
  });
};
