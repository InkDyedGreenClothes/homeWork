import React, { Component } from 'react';

export default class ListItem extends Component {
    state = {

    }
    render() {
        let { data, remove, doneChange } = this.props;
        let { id, name, message, done } = data;
        return <li>
            <h3>{name}</h3>
            <input type="checkbox"
                checked={done}
                onChange={() => {
                    doneChange(!done, id)
                }}
            />
            <p>{message}</p>
            <textarea></textarea>
            <a
                onClick={() => {
                    remove(id)
                }}
            >删除</a>
        </li>
    }
}
