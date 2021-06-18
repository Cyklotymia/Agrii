const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin')


module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js",
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, '../', "developFiles")
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../', "public")
      },

    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Development",
            template:"./html/main.html"

        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
              },
              {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              }
        ]
    }
}