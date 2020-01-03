const path = require('path');
const pageMap = require('./page-map');

const webRoot = path.resolve(__dirname, '../dist');

const webpackPlugins = () => {
  return pageMap(webRoot);
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    open: false
  },
  output: {
    filename: 'main.js',
    path: webRoot
  },
  module: {
  },
  plugins: webpackPlugins()
};
