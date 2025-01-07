// webpack.config.js
const path = require('path')
const RunPlugin = require('./plugin/RunPlugin')
const FileListTxtWebpackPlugin = require('./plugin/fileList-txt-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [new RunPlugin({ name: 'my-run-plugin' }), new FileListTxtWebpackPlugin({ name: 'fileListTxtWebpackPlugin'})]
}
