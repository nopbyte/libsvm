'use strict';
module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    library: 'SVM',
    libraryTarget:'window'
  },
  module: {
      rules: [
          {
              exclude: [/node_modules/, /libsvm\.asm\.js$/],
              test: /\.jsx?$/,
              loader: 'babel-loader'
          },
          {
              test: [/\.wasm(\?v=[0-9]\.[0-9]\.[0-9])?$/, /libsvm\.asm\.js$/, /libsvm\.js\.mem$/],
              loader: 'url-loader',
              query: {
                  name: '[name].[ext]',
                  limit: 1
              }
          }
      ]
  },
  node: {
      fs: 'empty'
  }
}
