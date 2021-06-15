const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: "./src/app/index.js",
        header: "./src/app/header.js",
        menu: "./src/app/menu.js",
        chef: "./src/app/chef.js",
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        contentBase: './dist',
    },

    plugins: [
        new htmlWebpackPlugin({
            inject: 'body',
            template: "./src/index.html",
            
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.(jpg|jpeg|png|svg)$/i,
                type: 'asset/resource',
            },
       
        ],
    },
};