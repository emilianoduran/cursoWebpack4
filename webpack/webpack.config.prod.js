const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: path.resolve(__dirname, '../src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist/js'),
        filename: '[name].js'

    }
}