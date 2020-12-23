// const HtmlWebpackPlugin = require('html-webpack-plugin');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "bundle.js"
    },
    devServer: {
        publicPath: '/dist'
    },
    module: {
        rules:[
            {
                test:/\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test:/\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin()
        new Analyzer()
    ]
};
