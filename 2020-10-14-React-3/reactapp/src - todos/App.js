import React, { Component, Fragment } from "react";
import "./index.css";
import AddTodo from "./addTodo";
import List from "./list";
import Title from "./title";
import Stats from "./stats";
class App extends Component {
  state = {
    data: [
      {
        id: 0,
        title: "这是第一条todo",
        done: false
      }, {
        id: 1,
        title: "这是第二条todo",
        done: true
      }
    ]
  }
  add = (newTodo) => {
    let { data } = this.state;
    data.unshift({
      id: Date.now(),
      title: newTodo,
      done: false
    });
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
  removeDone = ()=>{
    let { data } = this.state;
    this.setState({
      data: data.filter(item => !item.done)
    })
  }
  changeDone = (id, done) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], done: done }
        break;
      }
    }
    this.setState({
      data
    })
  }
  editTitle = (id,title)=>{
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], title}
        break;
      }
    }
    this.setState({
      data
    })
  }
  render() {
    let { data } = this.state;
    return <div id="todoapp">
      <Title />
      <div className="content">
        <AddTodo
          add={this.add}
        />
        {
          data.length > 0 && (<Fragment>
            <List
              data={data}
              remove={this.remove}
              changeDone={this.changeDone}
              editTitle = {this.editTitle}
            />
            <Stats
              data={data}
              removeDone = {this.removeDone}
            />
          </Fragment>)
        }
      </div>
    </div>
  }
}

export default App;