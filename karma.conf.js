module.exports = function (config) {
  config.set({
    basePath: 'src',
    files: [{
      pattern: 'spec.context.js',
      watched: false
    }],
    preprocessors: {
      'spec.context.js': ['webpack', 'sourcemap']
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: true,
    concurrency: Infinity,

    webpack: {
      devtool: 'inline-source-map',
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
              loader: 'ng-annotate-loader',
              options: {
                add: true
              }
            },
            {
              loader: 'babel-loader'
            },
          ]
        }, {
          test: /\.html$/,
          use: [{
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }]
        }, {
          test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "fast-sass-loader"
          }]
        }, {
          test: /\.eot(\?.*)?$/,
          loader: 'file-loader?name=fonts/[name].[hash].[ext]'
        }, {
          test: /\.(woff|woff2)(\?.*)?$/,
          loader: 'file-loader?name=fonts/[name].[hash].[ext]'
        }, {
          test: /\.ttf(\?.*)?$/,
          loader: 'url-loader?limit=1000&mimetype=application/octet-stream&name=fonts/[name].[hash].[ext]'
        }, {
          test: /\.svg(\?.*)?$/,
          loader: 'url-loader?limit=1000&mimetype=image/svg+xml&name=fonts/[name].[hash].[ext]'
        }, {
          test: /\.(jpe?g|png|gif)(\?.*)?$/i,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1000&name=images/[name].[hash].[ext]'
        }, {
          test: /\.ico$/,
          exclude: /node_modules/,
          loader: 'url-loader?limit=1000&name=[name].[hash].[ext]'
        }]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
