const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "./images",
                        publicPath: '../dist/images',
                        limit: 100
                    }
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "./css",
                        publicPath: '../dist/css',
                    }
                }

            }
        ]
    }
};
