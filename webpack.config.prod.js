const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name].js'

    }
}