module.exports = {
    presets:[
        '@babel/preset-env',
        '@vue/babel-preset-jsx',//使用这个规则解析vue
    ],
    plugins:['@babel/plugin-transform-runtime'],
}