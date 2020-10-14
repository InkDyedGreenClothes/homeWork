import React,{ Component } from "react";
import Child from "./Child";
/*
  组件的生命周期

    挂载阶段 (组件从创建到挂载到真实DOM中) mount:
      - constructor(props) 组件的初始化
      - static getDerivedStateFromProps(props) 
        - 注意 this 问题
      - render
      - componentDidMount -- 处理副作用(请求)
    更新阶段 (组件开始更新一直到真实DOM更新完成):
      - static getDerivedStateFromProps(props)  观察 props 的变化，重新将新的props绑定至state
    卸载阶段 (销毁组件)

*/
class App extends Component {
  state={
    isShow: true,
    name:"kkb"
  }
  setName=(newName)=>{
    this.setState({
      name: newName
    })
  }
  render(){
    let {name,isShow} = this.state;
    return <div>
    {isShow?<Child 
        name = {name} 
        setName = {this.setName}
      />:""}
    <button onClick={()=>{
      this.setState({
        isShow:!isShow
      })
    }}>卸载</button>      
  </div>
  }
}

export default App;