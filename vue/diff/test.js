
let newVDom = {
    tagName: 'ul',
    props: {
        class: 'list',
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
            chilren: ['vue']
        }
    ]
}


