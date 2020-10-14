import React, { Component } from "react";
class Child extends Component {
  state = {
    count: 1
  }
  componentDidMount(){
    window.onresize = function(){
      let size = document.querySelector("#size");
      size.innerHTML = window.innerWidth;
    };
  }
  componentWillUnmount(){
    console.log(1,"组件即将卸载");
    window.onresize = null;
  }
  render() {
    let { name, count } = this.state;
    let { setName } = this.props;
    return <div id="count">
      <p>name:{name}</p>
      <p>count:{count}</p>
      <p id="size"></p>
      <button onClick={() => {
        this.setState(function () {
          count++;
          return {
            count
          }
        })
      }}>递增</button>
      <button onClick={() => {
        setName("开课吧");
      }}>中文名</button>
    </div>
  }
}

export default Child;