const webpack = require("webpack");

let config = {
            entry: {
                main: './app/index.js'
            },
            output: {
                path: '/var/www/html/testwebpack/dist',
                filename: './bundle.js'
            },
            module: {
                loaders: [{
                  test: /\.js$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: "babel-loader",
                }]
            }
        }
	module.exports = config;
