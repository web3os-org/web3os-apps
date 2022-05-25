const path = require('path')
const webpack = require('webpack')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'inline-source-map',
  
  entry: './src/index.js',
  output: {
    clean: true,
    libraryTarget: 'module',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },

  experiments: {
    outputModule: true,
    topLevelAwait: true
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'package.json' }
      ]
    })
  ]
}
