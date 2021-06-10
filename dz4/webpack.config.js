const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunghash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins : [
        new HtmlWebpackPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: true,
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 4200
    }
}