# 模块化解决的问题

- 避免命名冲突
- 全局变量冲突
- 提高代码的可维护性，管理性

# AST（抽象语法树）
https://astexplorer.net/
- Code -> AST (Parse)
 - 词法分析
  - 字符 -> 词法单元（Token）
 - 语法分析
  - 词法单元 -> 语法树
- AST -> AST (Transform)
- AST -> Code (Generate)
## 将HTML转成AST
```js
const parse5 = require('parse5');

function htmlToAst(node) {
    const astNode = {
        type: node.nodeName,
        attributes: node.attrs || [],
        children: []
    };

    // 如果是文本节点，添加 value 属性
    if (node.nodeName === '#text') {
        astNode.value = node.value;
    }
    if (node.childNodes) {
        astNode.children = node.childNodes.map(child => htmlToAst(child));
    }

    return astNode;
}

function parseHtmlToAst(htmlString) {
    const document = parse5.parse(htmlString);
    return htmlToAst(document);
}

// 示例HTML
const htmlString = '<div><p>Hello, World!</p></div>';
const ast = parseHtmlToAst(htmlString);

console.log(JSON.stringify(ast, null, 2));
```

# 前端资源加载失败如何监控
1. script标签上加onerror事件
2. 监听window.onerror事件
```js
window.addEventListener('error', function(event) {
    if (!(event instanceof ErrorEvent)) {
        // 这是资源加载失败的错误
        console.error('Resource loading failed:', event.target);
        // 根据资源类型进一步筛选处理
        if (event.target.tagName === 'IMG') {
            console.error('Image failed to load:', event.target.src);
        } else if (event.target.tagName === 'SCRIPT') {
            console.error('Script failed to load:', event.target.src);
        } else if (event.target.tagName === 'LINK') {
            console.error('Stylesheet failed to load:', event.target.href);
        }
    }
}, true);
```

# 资源加载失败优化
1. 刷新页面
```js
location.reload(true) 
```
2. 重新加载失败文件
 - CDN托管分发静态资源，请求失败时，尝试从备用源加载资源
 - Service Worker缓存关键资源，支持离线加载
## js执行顺序
根据模块化加载，未加载就先不执行
