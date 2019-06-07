const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.base.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // cleans dist folder

module.exports = merge(webpackBaseConfig, {
  watch: false,
  output: {
    //filename: 'app.[contenthash:8].js',
    filename: 'index.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '../dist/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
});
