import React, { Component } from "react";
import Todo from "./todo";
/*
  key 属性: 方便 React 进行节点对比 diff


  A(key:1),B(key:2),C(key:3),D(key:4)
  B(key:2),C(key:3),D(key:4),E(key:5)


  key 的取值问题:
    1. 同一个列表中 key 值不能重复
    2. 更新前后同一个元素的key值不能变

    
*/
export default class List extends Component {
  render(){
    let {data} = this.props;
    return <ul id="todo-list">
      {
        data.map((item)=>{
          {/* 每次更新最好返回一个新的对象，否则没有办法区分更新前后的状态 */}
          return <Todo 
              {...this.props}
              data={item}
              key={item.id}
          />
        })
      }
     
  </ul>
  }
}