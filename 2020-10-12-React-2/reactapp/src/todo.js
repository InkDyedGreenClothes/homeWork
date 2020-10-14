import React, { Component } from "react";

export default class Todo extends Component {
  render(){
    let {data,remove} = this.props;
    return <li>
      <div className="todo ">
        <div className="display">
          <div className="todo-content">{data.title}</div>
          <span className="todo-destroy" onClick={()=>{
              remove(data.id);
          }}></span>
        </div>
      </div>
    </li>
  }
}