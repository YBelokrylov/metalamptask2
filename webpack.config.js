const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let pages = ['UI-Page', 'Landing-Page', 'Search-room-page', 'Room-details-page', 'Registration-page', 'Sign-in'];

module.exports = {
  context: path.resolve(__dirname, 'src/pages'),
  entry: {
    'UI-Page': './UI-Page/UI-Page.js',
    'Landing-Page': './Landing-Page/Landing-Page.js',
    'Search-room-page': './Search-room-page/Search-room-page.js',
    'Room-details-page': './Room-details-page/Room-details-page.js',
    'Registration-page': './Registration-page/Registration-page.js',
    'Sign-in': './Sign-in/Sign-in.js',
  },
  output: {
    filename: './[name]/[name].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        oneOf: [
          {
            use: [
              {
                loader: 'bemdecl-to-fs-loader',
                options: { levels: ['src/commonBlocks', 'src/templates'], extensions: ['js', 'css', 'jpg'], } // Add css and js files of BEM entities to bundle
              },
              { loader: 'html2bemdecl-loader' }, // convert HTML to bem DECL format
              {
                loader: 'pug-html-loader', // convert Pug to HTML
                options: {
                  // options to pass to the compiler same as: https://pugjs.org/api/reference.html
                  data: {} // set of data to pass to the pug render.
                }
              }
            ],
            issuer: /\.js$/
          },
          {
            use: [
              {
                loader: 'pug-loader',
                options: {
                  pretty: true
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
  ].concat(generateHtmlPages(pages))
};

function generateHtmlPages(names) {
  let pagesPlagins = [];

  for (let name of names) {
    pagesPlagins.push(
      new HtmlWebpackPlugin({
        filename: './' + name + '/' + name + '.html',
        template: './' + name + '/' + name + '.pug',
        chunks: [name]
      }),
      new CopyPlugin({
        patterns: [{ 
          from: name + '/images', 
          to: '../dist/' + name + '/images' 
        }],
      }),
    )
  }

  return pagesPlagins;
}
