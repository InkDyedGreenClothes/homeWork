import React, { Component } from "react";
export default class Todo extends Component {
  shouldComponentUpdate(nextProps){
    let {data:nextData} = nextProps;
    let {data} = this.props;
    // console.log(nextData.done,nextData.title,"next");
    // console.log(data.done,data.title,"now");
    // if(nextData.done===data.done&&nextData.title==data.title){
    //   return false;
    // }
    // return true;
    return !(nextData.done===data.done&&nextData.title===data.title);
  }
  render(){
    let {data,remove,changeDone} = this.props;
    let {id,title,done} = data;
    console.log("render",id);
    return <li>
      <div className={"todo "+ (done?"done":"")}>
        <div className="display">
          <input 
            className="check" 
            type="checkbox"
            checked={done}
            onChange={({target})=>{
              changeDone(id,target.checked)
            }}
          />
          <div className="todo-content">{title}</div>
          <span className="todo-destroy" onClick={()=>{
              remove(id);
          }}></span>
        </div>
      </div>
    </li>
  }
}