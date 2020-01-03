
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pages = [
  {
    title: 'My App',
    slug: 'index'
  },
  {
    title: 'Sample Page'
  }
];


const kebabCase = string => string.replace(/\s+/g, '-').toLowerCase();

module.exports = base => {

  const mapPages = data => {
    let slug = data.slug ? data.slug : kebabCase(data.title);
    let template = data.template ? data.template : 'src/_layout.html';

    return new HtmlWebpackPlugin({
      title: data.title,
      slug: slug,
      template: template,
      filename: `${base}/${slug}.html`,
      foo: 'bar'
    });
  };

  return pages.map(page => mapPages(page));

};
