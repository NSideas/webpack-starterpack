
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pages = require('./pages');

const kebabCase = string => string.replace(/\s+/g, '-').toLowerCase();

module.exports = base => {

  const mapPages = data => {
    let slug = data.slug ? data.slug : kebabCase(data.title);
    let defaultTemplate = 'src/html/_layout.html';
    let template = data.template ? data.template : defaultTemplate;

    return new HtmlWebpackPlugin({
      title: data.title,
      slug: slug,
      template: template,
      filename: `${base}/${slug}.html`,
      foo: 'bar' // Custom page property
    });
  };

  return pages.map(page => mapPages(page));

};
