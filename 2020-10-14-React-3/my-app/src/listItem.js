import React, { Component, createRef } from 'react';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            val: props.data.message
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (!prevState.edit && this.state.edit) {
            this.textareaRef.current.focus();
        }
    }
    textareaRef = createRef()
    render() {
        let { edit, val } = this.state;
        let { data, remove, doneChange, editMessage } = this.props;
        let { id, name, message, done } = data;
        return <li className={edit ? 'editing' : ''}
            onDoubleClick={() => {
                this.setState({
                    edit: true
                })
            }}
        >
            <h3>{name}</h3>
            <input type="checkbox"
                checked={done}
                onChange={() => {
                    doneChange(!done, id)
                }}
            />
            <p>{message}</p>
            <textarea
                value={val}
                ref={this.textareaRef}
                onBlur={() => {
                    this.setState({
                        edit: false
                    })
                    if (val.trim()) {
                        editMessage(val, id)
                    } else {
                        this.setState({
                            val: message
                        })
                    }
                }}
                onChange={({ target }) => {
                    this.setState({
                        val: target.value
                    })
                }}
            ></textarea>
            <a
                onClick={() => {
                    remove(id)
                }}
            >删除</a>
        </li>
    }
}
