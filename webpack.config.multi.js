const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/app.js')
            // add multiple items
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};