const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 用于将组件的css打包成单独的文件输出到`lib`目录中
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../lib/'),
        filename: 'index.js',
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
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        })
        // new BundleAnalyzerPlugin()
    ],

    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
};
