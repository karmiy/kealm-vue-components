const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const PathResolve = require('./webpack.util').pathResolve;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: "production",
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.min.js'
        }
    },
    output: {
        filename: '[name].[hash].js',
        path: PathResolve('dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist/'], {
          root: PathResolve( ''),
          verbose: true,
          dry: false
      }),
      new CopyWebpackPlugin([
        { from: PathResolve('favicon.ico'), to:  PathResolve('dist/favicon.ico') },
      ])
    ]
})