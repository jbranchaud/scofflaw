var path = require('path');

module.exports = {
  context: __dirname,
  entry: './assets/javascripts/app.jsx',
  output: {
    filename: 'bundle.js',
    path: '../app/assets/javascripts'
  },
  resolve: {
    root: [path.join(__dirname, "assets/javascripts")],
    extensions: ["", ".js", ".jsx",".css"]
  },
  modulesDirectories: ['node_modules'],
  module: {
    loaders: [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "loader": "babel-loader"
      },
      {
        "test": /\.css$/,
        "loader": 'style!css',
      },
    ]
  }
}
