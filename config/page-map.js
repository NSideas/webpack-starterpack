
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
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        'theme-color': '#4285f4'
        // Will generate: <meta name="theme-color" content="#4285f4">
      }
    });
  };

  return pages.map(page => mapPages(page)).concat([new HtmlWebpackHarddiskPlugin]);

};
