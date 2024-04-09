import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor() {
        super()
        this.list = [
            { id: 1, name: 'react' },
            { id: 2, name: 'vue' },
        ]
    }
    onDel = (id) => {
        this.list = this.list.filter((item) => item.id !== id)
    }
    render() {
        return (
            <div>
                <p>这是一个类组件</p>
                <ul>
                    {
                        this.list.map((item) =>(
                           <li key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => this.onDel(item.id)}>x</button>
                           </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
