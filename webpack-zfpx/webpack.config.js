let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer:{//开发服务器的配置
        port: 3000,
        progress: true,
        contentBase: './build'
    },
    mode: 'development',//模式 默认两种 production(生产模式) development(开发模式)
    entry: './src/index.js',//入口文件
    output: {
        filename: 'bundle.js',//打包后的文件名
        path: path.resolve(__dirname,'dist') //路径必须是一个绝对路径
    },
    plugins:[//数组 放着所有的webpack插件
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ]
}
