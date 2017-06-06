var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
  devtool : 'source-map',

  resolve : {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname),
      'node_modules',
      'src'
    ]
  },

  entry : [
    'src/app.js', 'src/sass/app.scss'
  ],

  target : 'web',
  output : {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },

  plugins : [
    new HtmlWebpackPlugin({template: 'src/index.html', inject: true}),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"

          }, {
            loader: "fast-sass-loader"
          }
        ]
      }
    ]
  }
};
