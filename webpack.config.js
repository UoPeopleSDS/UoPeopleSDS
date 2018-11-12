const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const templates = require('./tools/templateGen').templates;

const DEBUG = process.env.NODE_ENV === 'development';

// Create the plugins manually since it is directly tied
// to the template files we are creating for GitHub Pages.
const plugins = [
    new ExtractTextPlugin('content/css/style.css')
];

templates.forEach((element) => {
    // Since HtmlWebpackPlugin is stupid we need to tell it to generate only once.
    const filePath = path.join(__dirname, 'docs', element.fileName);
    const fileContents = fs.readFileSync(filePath);
    if (fileContents.indexOf('bundle.js') == -1) {
        plugins.push(
            new HtmlWebpackPlugin({
                hash: true,
                template: filePath,
                filename: filePath,
                inject: true,
                minify: {
                    collapseWhitespace: DEBUG ? false : true
                }
            })
        );
    }
});

plugins.push(
    new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(DEBUG?false:true),
        "process.env": {
            NODE_ENV: JSON.stringify(DEBUG?"development":"production")
        }
    })
);

const config = {
    entry: {
        app: ['babel-polyfill', 'isomorphic-fetch', './app/main.js']
    },
    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'content/js/bundle.js'
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
    plugins: plugins
};

module.exports = config;