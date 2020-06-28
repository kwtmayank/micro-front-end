var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname+'/public');
var APP_DIR = path.resolve(__dirname+'/app');

var config = {
    entry : APP_DIR+'/index.js',
    output : {
        path : BUILD_DIR,
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js?/,
                include : APP_DIR,
                use : {
                    loader : 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader' ]
            }
        ]
    }
}

module.exports = config;