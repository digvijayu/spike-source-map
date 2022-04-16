const path = require('path');

module.exports = {
  entry: './func.js',
  output: {
    filename: 'func.min.js',
    path: path.resolve(__dirname),
  },
  mode: 'production',
  devtool: 'source-map'
};