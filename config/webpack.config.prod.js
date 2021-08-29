const path = require("path")
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: "production",
  entry: {
      main: "./src/index.js",
      contact:"./src/indexContact.js",
      productLabel:"./src/productLabel.js"
  },
  output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, '../', "developFiles")
  },

  devServer: {
      contentBase: path.resolve(__dirname, '../', "html")
    },

  plugins: [
      new MiniCssExtractPlugin({
          filename:'[name]-[contenthash:4].css'
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: "Agrii",
          filename:"main.html",
          template:"./html/main.html",
          chunks:['main']

      }),
      new HtmlWebpackPlugin({
        title: "Agrii - kontakt",
        filename:"contact.html",
        template:"./html/contact.html",
        chunks:['contact']

    }),
    new HtmlWebpackPlugin({
      title: "Agrii - karta produktu ",
      filename:"productLabel.html",
      template:"./html/productLabel.html",
      chunks:['productLabel']

  }),
      new CopyPlugin({
        patterns: [
          { from: "public/images", to: "images" },
          // { from: "public/icons", to: "icons" },
        ],
      }),
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
            },
            {
              test: /\.(jpg|png|svg|gif|jpeg)$/,
              loader: 'file-loader',
              options:{
                  name:'[name][contenthash:4].[ext]',
                  outputPath:'images',
                  
              }
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use:[{
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }]
            },
            
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                presets: [
                  ["@babel/preset-env", { useBuiltIns: 'usage', corejs: "2.0.0" }]
                ],
                plugins: [
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            },
      ]
  }
}