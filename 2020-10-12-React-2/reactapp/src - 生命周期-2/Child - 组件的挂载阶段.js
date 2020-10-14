import React, { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
    console.log(0, "初始化组件")
  }
  // 将 props 中的某些数据关联到状态中
  static getDerivedStateFromProps(props) {
    // 将对应的数据添加到state中
    console.log(1, "将Props关联至state");
    return {
        name:props.name
    }
  }
  //组件挂载完成，如果要获取真实DOM，在该方法中获取
  componentDidMount(){
    console.log(3,"组件挂载完成");
    //console.log(document.querySelector("#name"));
  }
  render() {
    console.log(2,"调用render根据render的返回值，生成虚拟DOM")
    let { name, count } = this.state;
    let { setName } = this.props;
    return <div>
      <p id="name">name:{name}</p>
      <p>count:{count}</p>
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