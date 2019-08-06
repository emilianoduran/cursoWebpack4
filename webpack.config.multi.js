const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
        precios: path.resolve(__dirname, './src/pages/precios/precios.js'),
        about: path.resolve(__dirname, './src/pages/about/about.js'),
        contacto: path.resolve(__dirname, './src/pages/contacto/contacto.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    }

}