var merge = require('webpack-merge')
var webpackBase = require('./webpack.base.js');
var webpackDev = require('./webpack.dev.js')
var webpackPro = require('./webpack.pro.js')
const isProduction = process.env.NODE_ENV === "production" ? webpackPro : webpackDev
module.exports = merge(
    webpackBase,
    isProduction
)