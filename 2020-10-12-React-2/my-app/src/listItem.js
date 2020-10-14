import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        let { data } = this.props;
        return <li>
            <h3>{data.name}</h3>
            <p>{data.message}</p>
            <a>删除</a>
        </li>
    }
}
