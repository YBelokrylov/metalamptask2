const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src/pages'),
  entry: {
    'UI-Page': './UI-Page/UI-Page.js',
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
    new CopyPlugin({
      patterns: [
        { from: 'UI-Page/images', to: '../dist/Ui-Page/images' },
      ],
    }),

  ]
}
