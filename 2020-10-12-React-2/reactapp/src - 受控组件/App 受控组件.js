import React, { Component } from "react";
/*
  受控组件：
    将表单控件的内部状态(value,checked)和组件的状态进行绑定，然后 控件 onChange 时，再将 控件的状态同步给组件的状态
*/
class App extends Component {
  state={
    val:"",
    checked: true
  }
  render() {
    let {val,checked} = this.state;
    return <div>
        <input 
          type="text"
          value={val}
          onChange={({target})=>{
              this.setState({
                val:target.value
              })
          }}
        />
        <input 
          type="text"
          value={val}
          onChange={({target})=>{
              this.setState({
                val:target.value
              })
          }}
        />
        <input 
          type="text"
          value={val}
          onChange={({target})=>{
              this.setState({
                val:target.value
              })
          }}
        />
        <input 
          type="checkbox"
          checked={checked}
          onChange={({target})=>{
              this.setState({
                checked:target.checked
              })
          }}
        />
        <p>{checked?"选中":"不选中"}</p>
    </div>
  }
}

export default App;