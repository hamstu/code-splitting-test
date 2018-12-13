const webpack = require('webpack');
const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: resolve(join(__dirname, 'dist')),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  mode: 'production',
  devtool: false,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '[Test] Lazy Loading',
      template: './src/index.html',
    }),
    new webpack.ContextReplacementPlugin(
      /moment[/\\]locale$/, /en-us/,
    ),
    new BundleAnalyzerPlugin(),
  ],
};
