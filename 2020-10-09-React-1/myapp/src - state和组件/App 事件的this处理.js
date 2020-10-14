import React,{Component} from "react";
// class App extends React.Component {}
/*
  1. 使用类组件时，必须继承自 React.Component
  2. 类组件必须有一个render方法，在 render 的return 中定义该组件要构建的视图

  组件的视图更新：
    state 状态

  事件：
    1. 注意事件名是小驼峰
    2. 事件处理函数的 this 默认是 undefined 
        - 箭头函数
        - this 绑定
*/
// 通过 箭头函数 处理 this
// class App extends Component {
//   state={
//     count:1
//   }
//   render(){
//     let {count} = this.state
//     return <div>
//         <p>{count}</p>
//         <button
//           onClick={()=>{
//             console.log(this);
//           }}
//         >递增</button>
//     </div>
//   }
// }
// class App extends Component {
//   state={
//     count:1
//   }
//   handlerClick=()=>{
//     console.log(this);
//   }
//   render(){
//     let {count} = this.state
//     return <div>
//         <p>{count}</p>
//         <button
//           onClick={this.handlerClick}
//         >递增</button>
//     </div>
//   }
// }
// bind 绑定
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:1
    };
    this.handlerClick = this.handlerClick.bind(this);
  }
  handlerClick(){
    console.log(this);
  }
  render(){
    let {count} = this.state
    return <div>
        <p>{count}</p>
        <button
          onClick={this.handlerClick}
        >递增</button>
    </div>
  }
}

export default App;