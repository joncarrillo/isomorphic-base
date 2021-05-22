const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './app/index.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'app/index.html',
      hash: true,
    }),
    new MiniCSSExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
