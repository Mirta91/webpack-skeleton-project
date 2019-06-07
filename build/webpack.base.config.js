const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

var dir_markup ='';
//set up base folder for html files for production build
if (process.env.NODE_ENV === 'prod') {
  dir_markup ='../_markup/';
}

module.exports = {
  entry: './src/index',
  
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/typescript', 
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          noquotes: true
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              //name: '[name].[hash:8].[ext]',
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
          'postcss-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, '../src/scss'),
      '@img': path.resolve(__dirname, '../src/img'),
      '@': path.resolve(__dirname, '../src')
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],
    extensions: ['.js', '.ts'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      //filename: 'app.[contenthash:8].css',
      filename: 'main.css',
    }),
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack 4 setup',
      template: 'index.html',
      filename: dir_markup + 'index.html',
      inject: true,
      minify: {
        removeComments: true
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Test Page',
      template: './src/views/templates/test.html',
      filename: dir_markup + 'test.html'
    })
  ]
}
