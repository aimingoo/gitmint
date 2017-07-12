const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './gitment.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'gitmint.browser.js',
    libraryTarget: 'var',
    library: 'Gitmint',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /^node_mocules/,
        loaders: ['babel-loader'],
      },
    ],
  },
}
