import React, { Component } from "react";
class Child extends Component {
  state = {
    count: 1
  }
  static getDerivedStateFromProps(props) {
    console.log(0, "将Props关联至state");
    return {
        name:props.name
    }
  }
  // 控制组件是否进行更新
  shouldComponentUpdate(nextProps,nextState){
      // nextProps 更新之后 props，nextState 更新之后的 state
      console.log(1,this.props,this.state,nextProps,nextState);
      return true;// true 继续更新流程，进行组件更新，false 打断更新流程，不再继续更新
  } 
  getSnapshotBeforeUpdate(prevProps,prevState){
    // 获取更新前的DOM快照: 在这一步组件即将去更新视图（真实DOM），我们可以获取更新的DOM书状态
    let count = document.querySelector("#count");
    return count.innerHTML;
  }
  componentDidUpdate(prevProps,prevState,prevDOM){
    // 组件更新完成
    let count = document.querySelector("#count");
    console.log(prevDOM);
    console.log(count);
  }
  render() {
    console.log(2,"生成新的虚拟DOM");
    let { name, count } = this.state;
    let { setName } = this.props;
    return <div id="count">
      <p>name:{name}</p>
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