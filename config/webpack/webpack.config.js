const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')

const modeConfig = env => require(`./webpack.${env}.js`)(env)

module.exports = ({mode, presets} = {mode: 'production', presets: []}) => {
  console.log('mode', mode)
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /(\.js)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.html$/,
            exclude: /node_modules/,
            use: { loader: 'html-loader' }
          }
        ]
      },
      stats: {
        entrypoints: false,
        children: false
      },
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig(mode)
  )
}