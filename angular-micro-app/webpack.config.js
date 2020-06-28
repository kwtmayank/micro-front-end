'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main:  './main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },
    output: {
        path:__dirname+'/dist',
        publicPath: '/',
        filename: '[name].bundle.js'
    },

    optimization: {
        noEmitOnErrors: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: __dirname+'/tsconfig.json'
                        }
                    },
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader'}
                ]
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};