const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const buildDirectory = './dist/';

module.exports = {
  entry: "./src/App.jsx",
  devtool: 'source-map',
  output: {
    path: path.resolve(buildDirectory),
    filename: "build.js",
    publicPath: 'http://localhost:1337/dist'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader'
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        }),
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: false,
      allChunks: true
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 1337,
    historyApiFallback: true
  }
};