const path = require("path")
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../', "developFiles")
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../', "developFiles","/main.html")
      },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Development",
            template: "./main.html"

        })
    ]
}