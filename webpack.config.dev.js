var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');

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
    'webpack-hot-middleware/client', 'src/app.js', 'src/sass/app.scss'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack
      .optimize
      .OccurrenceOrderPlugin(true),
    new SimpleProgressPlugin()
  ],

  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
            loader: "fast-sass-loader"
          }
        ]
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=1000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=1000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif)(\?.*)?$/i,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&name=images/[name].[hash].[ext]'
      }, {
        test:  /\.ico$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1000&name=[name].[ext]'
      }
    ]
  }
};
