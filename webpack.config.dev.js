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

  entry : {
    app: ['./src/app.js']
  },

  target : 'web',
  // entry: ['./app/app.js'],
  output : {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
    pathinfo: true
  },

  // output: {   path: path.join(__dirname, 'dist'),   filename: 'bundle.js' },

  plugins : [
    new HtmlWebpackPlugin({template: 'src/index.html', inject: 'body'}),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
