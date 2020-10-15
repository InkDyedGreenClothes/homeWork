import React, { Component } from "react";
export default class Stats extends Component {
  render(){
    let {data,removeDone} = this.props;
    let doneDataLen = data.filter(data=>data.done).length;
    return <div id="todo-stats">
      <span className="todo-count">
        <span className="number">{data.length - doneDataLen}</span>
        <span className="word">项待完成</span>
      </span>
      {
        doneDataLen>0&&(<span className="todo-clear">
          <a onClick={()=>{
            removeDone()
          }}>Clear <span>{doneDataLen}</span> 已完成事项</a>
        </span>)
      }
    </div>
  }
}