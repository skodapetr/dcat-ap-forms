const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const common = Object.assign({}, require("./webpack.common"));

module.exports = merge(common, {
    "mode": "production",
    "output": {
        "filename": "bundle.[chunkhash].js",
    },
    "optimization": {
        "splitChunks": {
            "cacheGroups": {
                "commons": {
                    "test": /[\\/]node_modules[\\/]/,
                    "name": "vendor",
                    "chunks": "all",
                    "filename": "commons.[chunkhash].js"
                }
            }
        },
        "minimizer": [
            new UglifyJsPlugin({
                "cache": true,
                "parallel": true,
                "sourceMap": true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    "module": {
        "rules": [
            {
                "test": /\.css?$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    "plugins": [
        new CleanWebpackPlugin([common.output.path], {
            "root": path.join(__dirname, "..")
        }),
        new MiniCssExtractPlugin({
            "filename": "main.[hash].css"
        })
    ]
});

