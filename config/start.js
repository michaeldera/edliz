/* eslint-disable */
'use strict'

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

process.on('unhandledRejection', (err) => {
    throw err
})

const fs = require('fs')
const path = require('path')
const chalk = require('react-dev-utils/chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const clearConsole = require('react-dev-utils/clearConsole')
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles')
const {choosePort, createCompiler, prepareProxy, prepareUrls} = require('react-dev-utils/WebpackDevServerUtils')
const openBrowser = require('react-dev-utils/openBrowser')
const configFactory = require('./webpack.config')
const createDevServerConfig = require('./webpackDevServer.config')

const isInteractive = process.stdout.isTTY

const DEFAULT_PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '0.0.0.0'

if (process.env.HOST) {
    console.log(
        chalk.cyan(`Attempting to bind to HOST environment variable: ${chalk.yellow(chalk.bold(process.env.HOST))}`),
    )
    console.log(`If this was unintentional, check that you haven't mistakenly set it in your shell.`)
    console.log(`Learn more here: ${chalk.yellow('https://bit.ly/CRA-advanced-config')}`)
    console.log()
}

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const paths = {
    appPath: resolveApp('.'),
    appPackageJson: resolveApp('package.json'),
}

console.log(paths)

const {checkBrowsers} = require('react-dev-utils/browsersHelper')

checkBrowsers(paths.appPath, isInteractive)
    .then(() => {
        return choosePort(HOST, DEFAULT_PORT)
    })
    .then((port) => {
        if (port == null) {
            return
        }

        const config = configFactory('development')
        const protocol = process.env.HTTPS === 'true' ? 'https' : 'http'
        const appName = require(paths.appPackageJson).name
        const urls = prepareUrls(protocol, HOST, port)
        const devSocket = {
            warnings: (warnings) => devServer.sockWrite(devServer.sockets, 'warnings', warnings),
            errors: (errors) => devServer.sockWrite(devServer.sockets, 'errors', errors),
        }
        const compiler = createCompiler({
            appName,
            config,
            devSocket,
            urls,
            useYarn: true,
            useTypeScript: true,
            webpack,
        })
        const proxySetting = require(paths.appPackageJson).proxy
        const proxyConfig = prepareProxy(proxySetting)
        const serverConfig = createDevServerConfig(proxyConfig, urls.lanUrlForConfig)
        const devServer = new WebpackDevServer(compiler, serverConfig)
        devServer.listen(port, HOST, (err) => {
            if (err) {
                return console.log(err)
            }
            if (isInteractive) {
                clearConsole()
            }

            if (process.env.NODE_PATH) {
                console.log(
                    chalk.yellow(
                        'Setting NODE_PATH to resolve modules absolutely has been deprecated in favor of setting baseUrl in jsconfig.json (or tsconfig.json if you are using TypeScript) and will be removed in a future major release of create-react-app.',
                    ),
                )
                console.log()
            }

            console.log(chalk.cyan('Starting the development server...\n'))
            openBrowser(urls.localUrlForBrowser)
        })
        ;['SIGINT', 'SIGTERM'].forEach(function(sig) {
            process.on(sig, function() {
                devServer.close()
                process.exit()
            })
        })
    })
    .catch((err) => {
        if (err && err.message) {
            console.log(err.message)
        }
        process.exit(1)
    })
