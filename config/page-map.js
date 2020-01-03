
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

    return new HtmlWebpackPlugin({
      title: data.title,
      template: `src/${slug}.html`,
      filename: `${base}/${slug}.html`
    });
  };

  return pages.map(page => mapPages(page));

};
