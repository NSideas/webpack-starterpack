const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pageMap = require('./config/page-map');

const devMode = process.env.NODE_ENV !== 'production';

const webRoot = path.resolve(__dirname, './dist');

const webpackPlugins = () => {
  const plugins = [
    // new CleanWebpackPlugin()
  ];

  return plugins.concat(pageMap(webRoot));
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'main.js',
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
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { sourceMap: devMode }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: devMode }
          }
        ]
      }

    ]
  },
  plugins: webpackPlugins()
};
