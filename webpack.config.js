const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new HtmlWebpackPlugin({
      title: 'Sample Page',
      template: 'src/sample-page.html',
      filename: path.resolve(__dirname, 'dist/sample-page.html')
    })
  ]
};
