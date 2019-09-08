const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack starter project",
      template: path.resolve("./src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.jpg|png|svg|woff|eot|ttf|mp4|mp3|webm$/, //<== Tipo de archivos soportados
        use: {
          loader: "url-loader",
          options: {
            limit: 90000 // <== límite máximo de un archivo para combertirlo en base64
          }
        }
      }
    ]
  }
};
