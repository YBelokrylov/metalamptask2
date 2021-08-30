const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src/pages'),
  entry: {
    'UI-Page': './UI-Page/UI-Page.js',
    'Landing-Page': './Landing-Page/Landing-Page.js',
    'Search-room-page': './Search-room-page/Search-room-page.js',
    'Room-details-page': './Room-details-page/Room-details-page.js',
    'Registration-page': './Registration-page/Registration-page.js',
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
    new HtmlWebpackPlugin({
      filename: './UI-Page/UI-Page.html',
      template: './UI-Page/UI-Page.pug',
      chunks: ['UI-Page']
    }),
    new HtmlWebpackPlugin({
      filename: './Landing-Page/Landing-Page.html',
      template: './Landing-Page/Landing-Page.pug',
      chunks: ['Landing-Page']
    }),
    new HtmlWebpackPlugin({
      filename: './Search-room-page/Search-room-page.html',
      template: './Search-room-page/Search-room-page.pug',
      chunks: ['Search-room-page']
    }),
    new HtmlWebpackPlugin({
      filename: './Room-details-page/Room-details-page.html',
      template: './Room-details-page/Room-details-page.pug',
      chunks: ['Room-details-page']
    }),
    new HtmlWebpackPlugin({
      filename: './Registration-page/Registration-page.html',
      template: './Registration-page/Registration-page.pug',
      chunks: ['Registration-page']
    }),
    new CopyPlugin({
      patterns: [
        { from: 'UI-Page/images', to: '../dist/Ui-Page/images' },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'Landing-Page/images', to: '../dist/Landing-Page/images' },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'Search-room-page/images', to: '../dist/Search-room-page/images' },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'Room-details-page/images', to: '../dist/Room-details-page/images' },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'Registration-page/images', to: '../dist/Registration-page/images' },
      ],
    }),
  ]
}
