const modifyWebpackConfig = (config, app) => {
    config.module.rules = config.module.rules.filter((rule) => {
        return !rule.test.test('.svg')
    })

    config.module.rules.push({
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
    })

    config.module.rules.push({
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: {
                            removeViewBox: false,
                        },
                    },
                    ref: true,
                },
            },
        ],
    })

    if (app === 'web') {
        config.module.rules.push({
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
            use: [
                {
                    loader: 'url-loader',
                },
            ],
        })
    }

    return config
}

module.exports = modifyWebpackConfig
