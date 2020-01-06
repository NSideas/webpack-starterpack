
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const pages = require('./pages');

const kebabCase = string => string.replace(/\s+/g, '-').toLowerCase();

module.exports = base => {

  const mapPages = data => {
    let slug = data.slug ? data.slug : kebabCase(data.title);

    let defaultTemplate = 'src/html/_layout.html';
    let template = data.template ? data.template : defaultTemplate;

    let filePath = data.index ? base : `${base}/${slug}`;

    return new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      title: data.title,
      slug: slug,
      template: template,
      filename: `${filePath}/index.html`,
      foo: 'bar', // Custom page property
      meta: data.meta ? data.meta : ''
    });
  };

  return pages.map(page => mapPages(page)).concat([new HtmlWebpackHarddiskPlugin]);

};
