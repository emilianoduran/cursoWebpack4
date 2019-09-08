const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  devServer: {
    hot: true,
    port: 4300,
    open: true,
    before(app, server, compiler) {
      const watchFiles = [".html"]; // admine motores de plantillas como hbs o pug

      compiler.plugin("done", () => {
        const changedFiles = Object.keys(
          compiler.watchFileSystem.watcher.mtimes
        );

        if (
          this.hot &&
          changedFiles.some(filePath =>
            watchFiles.includes(path.parse(filePath).ext)
          )
        ) {
          server.sockWrite(server.sockets, "content-changed");
        }
      });
    }
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack starter project",
      template: path.resolve("./src/index.html")
      // chunks: []
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1 // <== Esta configuración es necesaria para que css-loader se ejecute en segundo lugar y postcss en primero.
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        use: "babel-loader", // <== mini ma configuración para babel.
        exclude: /node_modules/ // <== No incluye los módules de node
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
