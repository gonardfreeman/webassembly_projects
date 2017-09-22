const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src",
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 4040,
        hot: true,
        inline: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/$/,
                    to: "/views/index.html"
                }
            ]
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.rs$/,
                use: {
                    loader: "rust-wasm-loader",
                    options: {
                        path: "dist"
                    }
                }
            }
        ]
    },
    externals: {
        'fs': true,
        'path': true,
    }
}