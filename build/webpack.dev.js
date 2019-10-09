var webpack = require('webpack')
var { HotModuleReplacementPlugin } = webpack
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true,
        quiet: true,
        before:require('./../mock/index')
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
} 