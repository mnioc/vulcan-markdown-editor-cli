const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 开发模式
    entry: path.join(__dirname, '../demo/src/index.js'), // 项目入口，处理资源文件的依赖关系
    output: {
        path: path.join(__dirname, '../demo/src/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // 使用 babel-loader 来编译处理 js 和 jsx 文件
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
                exclude: /\.min\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.min\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: 'images/', // 图片输出的路径
                        limit: 10 * 1024 // <10kb 使用base64
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
    devServer: {
        contentBase: path.join(__dirname, '../demo/src/'),
        compress: true,
        host: '127.0.0.1', // webpack-dev-server启动时要指定ip，不能直接通过localhost启动，不指定会报错
        port: 8080, // 启动端口为 3001 的服务
        open: true, // 自动打开浏览器
        proxy: {
            '/api': {
                target: 'http://121.5.152.122:8000',
                pathRewrite: {
                    '^/api': '/api'
                },
                changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/src/index.html',
            filename: 'index.html'
        })
    ]
};
