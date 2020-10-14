import React, { Component } from 'react';
import Add from './add';
import './index.css';

export default class App extends Component {
  state = {
    data: [
      // {
      //   id: Date.now(),
      //   name: '',
      //   message: ''
      // }
    ]
  }
  add = (newMessage) => {
    let {data} = this.state;
    data.push(newMessage)
    this.setState({
      data
    })
  }
  render() {
    let {data} = this.state;
    return (
      <div className="wrap">
        <h2 className="title">留言板</h2>
        <Add
          data={data}
          add={this.add}
        />
      </div>
    );
  }

};
