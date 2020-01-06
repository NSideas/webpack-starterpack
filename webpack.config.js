const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pageMap = require('./config/page-map');

const devMode = process.env.NODE_ENV !== 'production';

const webRoot = path.resolve(__dirname, './dist');

const webpackPlugins = () => {
  const plugins = [
    new CleanWebpackPlugin()
  ];

  return plugins.concat( pageMap(webRoot) );
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    writeToDisk: true,
    open: false
  },
  output: {
    filename: 'assets/main.js',
    path: webRoot
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: devMode }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: devMode }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/img/',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: webpackPlugins()
};
