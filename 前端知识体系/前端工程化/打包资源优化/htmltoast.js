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