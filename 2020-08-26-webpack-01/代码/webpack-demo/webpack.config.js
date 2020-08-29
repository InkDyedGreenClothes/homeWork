const path = require('path');

//  webpack 是运行在 node 环境里面，所以这里使用的是node下模块导出方式，在这个js文件中，我们可以调用node下所有功能
module.exports = {

    mode: 'development',

    // 入口，webpack 会从这个入口文件进行分析，分析每一个文件中依赖的其它文件（import语句），把所有相关联的文件全部加载，然后进行打包
    // entry: './src/index.js',
    entry: {
        index: './src/index.js'
    },

    // output  设置打包以后的文件的规则
    output: {
        // path 一定是绝对目录
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        // 被加载的模块的解析处理规则
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        // placeholder 占位符 [name] 源资源模块的名称
                        // [ext] 源资源模块的后缀
                        name: "[name]_[hash].[ext]",
                        // //打包后的存放位置
                        outputPath: "./images",
                        // // 打包后文件的 url
                        publicPath: '../dist/images',
                        // 小于 100 字节转成 base64 格式
                        limit: 100
                      }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            // 启用/禁用 url() 处理
                            url: true,
                            // 启用/禁用 @import 处理
                            import: true,
                            // 启用/禁用 Sourcemap
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    }
}