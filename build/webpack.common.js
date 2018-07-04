const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "entry": [
        path.join(__dirname, "..", "client", "index.jsx")
    ],
    "output": {
        "path": path.join(__dirname, "..", "dist"),
        "filename": "bundle.js",
        "publicPath": "./"
    },
    "resolve": {
        // This allow us to use absolute paths for modules inside the
        // application.
        "modules": ["client", "node_modules"],
        // Enable implicit resolution of jsx files.
        // Otherwise we would need to specify the jsx extension.
        "extensions": [".js", ".jsx", "*"],
    },
    "module": {
        "rules": [
            {
                "test": /\.jsx?$/,
                "loaders": ["babel-loader"],
                "include": path.resolve(__dirname, "..", "client"),
            },
            {
                "test": /\.scss$/,
                "use": [
                    {"loader": "style-loader"},
                    {"loader": "css-loader"},
                    {"loader": "sass-loader"}
                ]
            }
        ]
    },
    "plugins": [
        new HtmlWebpackPlugin({
            "filename": "index.html",
            "template": path.join(__dirname, "..", "public", "index.html"),
            "inject": true
        }),
        new webpack.DefinePlugin({})
    ]
};