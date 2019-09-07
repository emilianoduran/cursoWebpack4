const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                'css-loader'
            ]

        }]

    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'nuevo test',
            template: path.resolve(__dirname, './src/index.html'),

        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}