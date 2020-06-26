const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve('./dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]?[hash]',
                       // publicPath: './dist/',
                        limit: 10000 // 10kb
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/favicon.ico'
        })
    ],
    // TODO: 여기에 api 서버(localhost:8001) 프록싱 설정을 추가하세요
    /**
     * 설정 후,  yarn dev 명령어를 사용하세요
     */


};