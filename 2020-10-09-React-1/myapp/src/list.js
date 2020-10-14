import React, { Component } from "react";
// 子组件中有一个属性叫做 props，通过 props 可以接收父级传递过来的信息
class List extends Component {
  state={
    show: false
  };
  render() {
    let {data} = this.props;
    let {name,children} = data;
    let {show} = this.state;
    return <li className={show?"subList-show":""}>
      <a onClick={()=>{
        this.setState({
          show:!show
        })
      }}>{name}</a>
      <ul className="subList">
        {children.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </li>
  }
}

export default List;