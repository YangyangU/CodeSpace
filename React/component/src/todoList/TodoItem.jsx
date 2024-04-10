/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { Component } from 'react'

export default class TodoItem extends Component {

    state = {
        index: 0
    }

    static propTypes = {
        list: PropTypes.array.isRequired
    }

    getItem = (index) => {
        // console.log(index);
        this.props.deleteItem(index)
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li key={index}>{item}<button onClick={()=>this.getItem(index)}>x</button></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
