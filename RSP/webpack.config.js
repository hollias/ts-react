const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',  //production
  devtool: 'eval',      //production으로 변경시 hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'] //
  },

  entry: {
    app: './client'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
    }]
  },
  plugins: [

  ],

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),  // /dist/app.js에 생성
    publicPath: '/dist'
  }
}