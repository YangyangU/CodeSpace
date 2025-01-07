class FileListTxtWebpackPlugin {
    // apply函数 帮助插件注册，接收complier类
    constructor(options) {
        console.log(options);
        // webpack 中配置的 options 对象
        this.options = options
    }

    apply(complier) {

        // 异步的钩子
        complier.hooks.emit.tapAsync("FileListTxtWebpackPlugin", (compilation, callback) => {

            const fileDependencies = [...compilation.fileDependencies]
            // 打包后 dist 目录下的文件资源都放在 assets 对象中
            const assets = compilation.assets
            // 定义返回文件的内容
            let fileContent = `文件数量：${Object.keys(assets).length}\n文件列表：`
            Object.keys(assets).forEach(item => {
                // 文件的源内容
                const source = assets[item].source();
                // 文件的大小
                let size = assets[item].size()
                size = size >= 1024 ? `${(size / 1024).toFixed(2)}/kb` : `${size}/bytes`;

                // 文件路径
                const sourcepath = fileDependencies.find(path => {
                    if (path.includes(item)) return path
                }) || ''
                fileContent = `${fileContent}\n  filename: ${item}    size: ${size}    sourcepath: ${sourcepath}`
            })

            // 添加自定义输出文件
            compilation.assets["fileList.txt"] = {
                source: function () {
                    // 定义文件的内容
                    return fileContent
                },
                size: function () {
                    // 定义文件的体积
                    return Buffer.byteLength(fileContent, 'utf8');
                },
            };
            // 注意，异步钩子中 callback 函数必须要调用
            callback();
        });
    }
}

module.exports = FileListTxtWebpackPlugin;