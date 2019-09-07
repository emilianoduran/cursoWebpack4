const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        port: 4300,
        open: true,
        before(app, server, compiler) {
            const watchFiles = ['.html'];

            compiler.plugin('done', () => {
                const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);

                if (
                    this.hot &&
                    changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
                ) {
                    server.sockWrite(server.sockets, 'content-changed');
                }
            });
        }
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack starter project',
            template: path.resolve('./src/index.html')
                // chunks: []
        }),


    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }],
    },
}