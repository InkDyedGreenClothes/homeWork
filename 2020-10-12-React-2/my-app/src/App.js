import React, { Component } from 'react';
import Add from './add';
import './index.css';

export default class App extends Component {
  state = {
    data: [
      {
        id: Date.parse(new Date()),
        name:'第一条留言',
        message:'还没有内容'
      }
    ]
  }
  add = (newMessage) => {
    let { data } = this.state;
    data.push(newMessage)
    this.setState({
      data
    })
  }
  remove = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter(item => item.id !== id)
    })
  }
  render() {
    let { data } = this.state;
    return (
      <div className="wrap">
        <h2 className="title">留言板</h2>
        <Add
          data={data}
          add={this.add}
          remove={this.remove}
        />
      </div>
    );
  }

};
