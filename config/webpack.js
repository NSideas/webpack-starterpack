const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webRoot = path.resolve(__dirname, '../dist');

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
  const mapPages = data => new HtmlWebpackPlugin({
    title: data.title,
    template: `src/${data.slug}.html`,
    filename: `${webRoot}/${data.slug}.html`
  });
  return pages.map(page => mapPages(page));
}

console.log(webpackPlugins());


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: webRoot
  },
  plugins: webpackPlugins()
};
