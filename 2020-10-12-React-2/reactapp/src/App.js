import React, { Component } from "react";
import "./index.css";
import AddTodo from "./addTodo";
import List from "./list";
import Title from "./title";
class App extends Component {
  state={
    data:[
      {
         id: 0,
         title: "这是第一条todo"
      }
    ]
  }
  add=(newTodo)=>{
    let {data} = this.state;
    data.push({
      id: Date.now(),
      title: newTodo
    });
    this.setState({
      data
    })
  }
  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }
  render() {
    let {data} = this.state;
    return <div id="todoapp">
      <Title />
      <div className="content">
          <AddTodo 
            add = {this.add}
          />
          <List 
            data={data} 
            remove = {this.remove}
          />
      </div>
    </div>
  }
}

export default App;