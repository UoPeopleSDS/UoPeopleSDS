const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const DEBUG = process.env.NODE_ENV === 'development';

const config = {
    entry: {
        app: ['babel-polyfill', 'isomorphic-fetch', './app/main.js']
    },
    output: {
        path: path.resolve(__dirname, 'build', 'public'),
        filename: DEBUG ? 'js/bundle.js' : 'js/bundle.[hash].js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',				
               query: {
                  presets: ['es2015', 'react', 'stage-0']
               }
            }
         ]
    },
    plugins: [
        new ExtractTextPlugin(DEBUG ? 'css/style.css' : 'css/style.[hash].css'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            hash: DEBUG ? false : true,
            filename: '../index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: DEBUG ? false : true
            }
        }),
          new CopyWebpackPlugin([
             { from: 'app/vendor' },
             { from: 'app/vendor/*.*' }
         ]),
         new webpack.DefinePlugin({
             PRODUCTION: JSON.stringify(true),
             "process.env": {
                 NODE_ENV: JSON.stringify("production")
             }
         })  
    ]
};

module.exports = config;