// This webpack config enables combining all elements of the standard chunked
// build into one bundle for clean release.
const path = require('path');
const glob = require('glob');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    'bundle.js': glob.sync('build/static/?(js|css)/*.?(js|css)').map(
      (f) => path.resolve(__dirname, f)
  )},
  output: {
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new UglifyJsPlugin()],
}