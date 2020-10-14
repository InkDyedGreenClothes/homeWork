import React, { Component } from "react";
import Todo from "./todo";

export default class List extends Component {
  render(){
    let {data,remove} = this.props;
    return <ul id="todo-list">
      {
        data.map((item,index)=>{
          return <Todo 
              data={item}
              key={index}
              remove={remove}
          />
        })
      }
     
  </ul>
  }
}