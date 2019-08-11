const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PathResolve = require('./webpack.util').pathResolve;

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },
    resolve: {
        modules: [
            PathResolve('node_modules')
        ],
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue': 'vue/dist/vue.js',
          '@kealm/style/dist/vue': '../../../../packages/style/dist/vue/salus.min.css',
          '@kealm/vue-components': '../../../../packages/components/vue/lib/kmy-vue-components.umd.js',
        }
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
              name: 'vendor',
              chunks: 'all',
            }
          }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use:  [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    {
                        loader: 'vue-style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            publicPath: './'
                        }
                    }
                ]
            },
            {
                test: /\.otf|ttf|woff2?|eot(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                  limit: 10000,
                  name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.svg(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunks: ['vendor', 'app']
        })
    ]
}

