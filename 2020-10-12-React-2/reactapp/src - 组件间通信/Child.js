import React,{ Component } from "react";
class Child extends Component {
  state={
    count: 1
  }
  render(){
    let {count} = this.state;
    let {name,setName} = this.props;
    return <div>
      <p>name:{name}</p>
      <p>count:{count}</p>
      <button onClick={()=>{
          this.setState(function(){
            count++;
            return {
              count
            }
          })
      }}>递增</button>
      <button onClick={()=>{
          setName("开课吧");
      }}>中文名</button>
  </div>
  }
}

export default Child;