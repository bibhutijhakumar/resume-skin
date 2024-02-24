const path = require("path");

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
        directory: path.join(__dirname, "build"),
      },
      host: '0.0.0.0',
      open: ['http://localhost:1000'],
      port: 1000,
      historyApiFallback: true,
  },
});