'use_strict';
//const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: './home',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist"),
        library: 'home',
        publicPath: '/public/'
    },

    //watch: true, //NODE_ENV == 'development'

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: 'source-map',//NODE_ENV == 'development' ? 'source-map' : null

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
    //                'sass-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {loader: 'babel-loader', options: {presets: [['es2015', {modules: false}]]}}
                    ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8000,
        proxy: {
            "/api": {
                target: "http://localhost:8080/",
                secure: false

            }
        }
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ]

};
