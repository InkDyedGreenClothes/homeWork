import React, { Component } from 'react';
import List from './list'
export default class Add extends Component {
    state = {
        name: '',
        message: ''
    }
    render() {
        let { name, message } = this.state;
        let { data, add, remove } = this.props;
        return <div className="addMessage">
            <input type="text" placeholder="请输入昵称"
                value={name}
                onChange={({ target }) => {
                    this.setState({
                        name: target.value
                    })
                }}
            />
            <textarea placeholder="请输入留言"
                value={message}
                onChange={({ target }) => {
                    this.setState({
                        message: target.value
                    })
                }}
            ></textarea>
            <button
                onClick={() => {
                    let obj = {
                        id: Date.parse(new Date()),
                        name,
                        message
                    }
                    if (name && message) {
                        add(obj);
                        this.setState({
                            name: '',
                            message: ''
                        })
                    }
                }}
            >提交留言</button>
            <List
                data={data}
                remove={remove}
            />
        </div>
    }
}
