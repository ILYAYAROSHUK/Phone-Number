const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {template} = require("@babel/core");
module.exports = {
    mode: 'development',
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            { test: /\.svg$/, use: 'svg-inline-loader',
                use:{loader: "file-loader"}
            }
        ],
    }
    }