var path = require('path');

module.exports = {
  context: __dirname,
  entry: './assets/javascripts/app.jsx',
  output: {
    filename: 'bundle.js',
    path: '../app/assets/javascripts'
  },
  devtool: "source-map",
  resolve: {
    root: [path.join(__dirname, "assets/javascripts")],
    extensions: ["", ".js", ".jsx"]
  },
  modulesDirectories: ['node_modules'],
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        exclude: /node_modules/,
      }
    ],
    loaders: [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "babel-loader",
      },
      {
        "test": /\.(scss|css)$/,
        "loader": 'style!css!sass',
      },
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
}
