var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SimpleProgressPlugin = require('webpack-simple-progress-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');

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
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  devServer : {
    contentBase: './dist'
  },

  plugins : [
    new webpack.ProvidePlugin({"window.jQuery": "jquery"}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new SimpleProgressPlugin(),
    new webpack
      .optimize
      .OccurrenceOrderPlugin(),
    new webpack
      .optimize
      .UglifyJsPlugin({
        compress: {
          drop_console: true
        }
      }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new ExtractTextPlugin('styles/app.[chunkhash].css'),
    new WebpackMd5Hash()
  ],

  module : {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            }, {
              loader: "fast-sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      }, {
        test: /\.(jpe?g|png|gif|ico)$/i,
        include: path.resolve('./src'),
        exclude: /node_modules/,
        loader: 'url-loader?limit=10000&name=images/[hash].[ext]'
      }
    ]
  }
};
