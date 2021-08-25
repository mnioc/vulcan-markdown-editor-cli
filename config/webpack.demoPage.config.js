const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../demo/src/index.js'),
    output: {
        path: path.join(__dirname, '../docs/'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(less)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            // modifyVars: {
                            //     '@primary-color': '#d7000f'
                            // },
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/',
                        limit: 10 * 1024 //
                    }
                }
            },
            {
                test: /\.md$/,
                use: {
                    loader: 'raw-loader'
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({}),
        new HtmlWebpackPlugin({
            template: './demo/src/index.html',
            filename: 'index.html',
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            //  html 文件进行压缩
            minify: {
                removeComments: true, //去注释
                collapseWhitespace: true, //压缩空格
                removeAttributeQuotes: true //去除属性引用
            }
        })
    ]
};
