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
         title: "这是第一条todo",
         done: false
      },{
        id: 1,
        title: "这是第二条todo",
        done: true
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
  changeDone=(id,done)=>{
    let {data} = this.state;
    for(let i = 0; i < data.length; i++){
      if(data[i].id === id){
        data[i].done = done;
        break;
      }
    }
    this.setState({
      data
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
            changeDone = {this.changeDone}
          />
      </div>
    </div>
  }
}

export default App;