const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const PathResolve = require('./webpack.util').pathResolve;

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        contentBase: './',
        port: '3200'
    },
    output: {
        filename: '[name].bundle.js',
        path: PathResolve('dist')
    }
})