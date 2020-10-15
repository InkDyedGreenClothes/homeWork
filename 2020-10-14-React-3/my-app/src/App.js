import React, { Component } from 'react';
import Add from './add';
import './index.css';
import Stats from './stats';

export default class App extends Component {
  state = {
    data: [
      {
        id: 0,
        name: '第一条留言',
        message: '还没有内容',
        done: false
      },
      {
        id: 1,
        name: '第二条留言',
        message: '我是新的留言',
        done: true
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
  doneChange = (done, id) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].done = done
      }
    }
    this.setState({
      data
    })
  }
  checkAll = (done) => {
    let { data } = this.state;
    data.forEach(item => {
      item.done = done
    });
    this.setState({
      data
    })
  }
  removeCheck = () => {
    let { data } = this.state;
    if (data.filter(item => item.done).length <= 0) {
      alert('请选择需要删除项!');
      return;
    }
    this.setState({
      data: data.filter(item => !item.done)
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
          doneChange={this.doneChange}
          checkAll={this.checkAll}
          removeCheck={this.removeCheck}
        />
        <Stats
          data={data}
          checkAll={this.checkAll}
          removeCheck={this.removeCheck}
        ></Stats>

      </div>
    );
  }
};
