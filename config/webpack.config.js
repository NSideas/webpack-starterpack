const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  {
    title: 'My App',
    slug: 'index'
  },
  {
    title: 'Sample Page',
    slug: 'sample-page'
  }
];

function webpackPlugins() {
  // Build HTML pages
  return pages.map(pageInfo => new HtmlWebpackPlugin({
    title: pageInfo.title,
    template: `src/${pageInfo.slug}.html`,
    filename: path.resolve(__dirname, `dist/${pageInfo.slug}.html`)
  }));
}


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: webpackPlugins()
};
