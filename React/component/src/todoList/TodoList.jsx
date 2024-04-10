import { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    state = {
        item: '',
        list: ['html', 'css']
    }
    changeHandler = (e) => {
        // console.log(e.target.value);
        this.setState({
            item : e.target.value
        })
    }
    addItem = (item) => {
        // console.log(item);
        this.setState({
            list : this.state.list.concat(item),
            item : ''
        })
    }

    deleteItem = (index) => {
        // console.log(index);
        this.setState({
            list : this.state.list.filter((_, i) => i !== index)
        })
    }
    
    render() {
        return (
            <div>
                <header>
                    <input type="text" value={this.state.item} onChange={this.changeHandler}/>
                    <button onClick={() => this.addItem(this.state.item)}>提交</button>
                </header>
                <section>
                    <TodoItem list={this.state.list} deleteItem={this.deleteItem}></TodoItem>
                </section>
            </div>
        )
    }
}
