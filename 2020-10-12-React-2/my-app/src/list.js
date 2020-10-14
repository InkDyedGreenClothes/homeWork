import React, { Component } from 'react';
import ListItem from './listItem'
export default class List extends Component {
    render() {
        let { data, remove } = this.props;
        return <ul className="messageList">
            {data.map(item => {
                return <ListItem
                    data={item}
                    key={item.id}
                    remove={remove}
                />
            })}
        </ul>
    }
}
