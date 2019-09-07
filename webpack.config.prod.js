const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack starter project',
            template: path.resolve('./src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order

        })

    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ],
    },
}