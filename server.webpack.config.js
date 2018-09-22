var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

// Always true since this does not run within GitHub Pages.
const DEBUG = true;
const nodeModules = {};

module.exports = {
    entry: './server/server.js',
    target: 'node',
    node: {
        __dirname: false
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'server.js',
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015'],
                    compact: true,
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ],
    }
};