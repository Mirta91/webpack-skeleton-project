const merge = require('webpack-merge')
const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js')

module.exports = merge(webpackBaseConfig, {
    output: {
        path: path.resolve(__dirname, '../dist'),
        //filename: 'app.[contenthash:8].js',
        filename: 'index.js',
        publicPath: '/'
    },
    devtool: 'source-map'
})
