var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/js/renderer/entry.js'],
  },

  output: {
    filename: 'bundle.js',
    path: './public/built'
  },

  // enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  // this tells webpack that we're building an electron app
  target: 'electron',
}
