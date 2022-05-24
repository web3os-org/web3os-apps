const path = require('path')
const webpack = require('webpack')

const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'inline-source-map',
  experiments: {
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
