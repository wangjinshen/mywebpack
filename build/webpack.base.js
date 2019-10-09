
var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require('path')
module.exports = {
    mode: process.env.NODE_ENV,
    entry: path.resolve(process.cwd(), 'src/index.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{ loader: "ts-loader" }],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: ["css-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: ['url-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { "presets": ["@babel/preset-env"] }
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: "body",
            template: path.resolve(process.cwd(), 'index.html'),
        }),
    ]
}