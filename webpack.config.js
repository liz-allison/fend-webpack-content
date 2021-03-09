const HtmlWebPackPlugin = require('html-webpack-plugin')

plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
]

const path = require("path")
const webpack = require("webpack")

module.exports = {
    entry: './src/client/index.js',
    mode: 'none'
}

module: {
    rules: [
            {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
            }
    ]
}