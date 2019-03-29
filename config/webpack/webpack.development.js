const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
  devServer: {
    contentBase: './dist',
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(s?)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: require(path.join(
                process.cwd(),
                'src/styles/sass-resources/utils.js'
              ))
            }
          }
        ]
      }
    ]
  }
})
