var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['webpack/hot/dev-server', './src/jsx/entry.jsx'],
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  // enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },

  // this tells webpack that we're building an electron app
  target: 'electron',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
