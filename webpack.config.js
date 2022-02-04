const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: './js/script.js',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module:{
    rules:[
      // css loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // sass loader
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // file loader - img
      {
        test: /\.(jpe?g|png|gif|svg|JPG)$/, 
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]',
        }
      },
      // file loader - font
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]',
        }
      },
      // babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
    ]
  }
}
