import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
var webpackMiddleware = require("webpack-dev-middleware-webpack-2");

/* eslint-disable no-console */


const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  //noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
