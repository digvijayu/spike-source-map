const path = require('path');

module.exports = {
  entry: './jquery-3.6.0.js',
  output: {
    filename: 'jquery-3.6.0.min.js',
    path: path.resolve(__dirname),
  },
  mode: 'production',
  devtool: 'source-map'
};