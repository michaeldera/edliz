require('dotenv').config()

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const modifyWebpackConfig = require('./webpackConfigCommon')
const webpack = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const config = (webpackEnv) => {
    const isEnvDevelopment = webpackEnv === 'development'

    return {
        entry: ['react-hot-loader/patch', resolveApp('src')],
        mode: isEnvDevelopment ? 'development' : 'production',
        output: {
            filename: '[name].bundle.js',
            chunkFilename: '[name].bundle.js',
            path: resolveApp('dist'),
            publicPath: '/',
        },
        devtool: 'source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            port: 3000,
            clientLogLevel: 'none',
            quiet: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json'],
            alias: {
                'react-dom': '@hot-loader/react-dom',
                '~views': resolveApp('src/views'),
                '~components': resolveApp('src/components'),
                '~util': resolveApp('src/utils/index.ts'),
                '~src': resolveApp('src'),
                '~data': resolveApp('src/data'),
                '~stores': resolveApp('src/stores'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        },
                    },
                },
                {
                    test: /\.(png|jpg|gif|mp4)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                        },
                    ],
                },
            ],
        },
        plugins: [
            // new HardSourceWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
                'process.env.API_URL': JSON.stringify(process.env.API_URL),
            }),
            new ForkTsCheckerWebpackPlugin({
                async: isEnvDevelopment,
            }),
            // new BundleAnalyzerPlugin(),
        ],
    }
}

module.exports = (webpackEnv) => modifyWebpackConfig(config(webpackEnv || 'production'), 'web')
