//compiler 编译器
let Dom = {
    tagName: 'ul',
    props: {
        class: 'list',
        id: 'list'
    },
    chilren: [
        {
            tagName: 'li',
            props: {
                class: 'item'
            },
            chilren: ['html']
        },
        {
            tagName: 'li',
            props: {
                class: 'item'
            },
            chilren: ['css']
        },
        {
            tagName: 'li',
            props: {
                class: 'item'
            },
            chilren: ['js']
        }
    ]
}