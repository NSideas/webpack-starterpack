const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const pageMap = require('./page-map');

const webRoot = path.resolve(__dirname, '../dist');

const webpackPlugins = () => {
  const plugins = [
    new CleanWebpackPlugin()
  ];

  return plugins.concat(pageMap(webRoot));
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
  plugins: webpackPlugins()
};
