import React,{ Component } from "react";
/*
  props 和 state

  props：父组件传递给子组件的信息

  state: 组件自身的数据

- setState(updater, [callback])
    - updater: 更新数据 FUNCTION/OBJECT
    - callback: 更新成功后的回调 FUNCTION
    - 异步:react通常会集齐一批需要更新的组件，然后一次性更新来保证渲染的性能
    - 浅合并 Objecr.assign()
    - 调用 setState 之后，会触发生命周期，重新渲染组件  
*/
class App extends Component {
  state={
    count: 1,
    name:"kkb"
  }
  // render(){
  //   console.log("准备渲染/更新组件")
  //   let {count,name} = this.state;
  //   return <div>
  //     <p>name:{name}</p>
  //     <p>count:{count}</p>
  //     <button onClick={()=>{
  //         this.setState({
  //             count:count+1
  //         });
  //         this.setState({
  //             name: "开课吧"
  //         });
  //         console.log(this.state.count);  
  //         /*
  //           注意 setState 会进行浅合并，我们只需要修改需要修改的状态
  //           setState 是一个异步方法，调用 setState 修改状态，并不会立马修改组件的状态，而是进入一个更新流程，在更新过程中去修改state
  //          */
  //     }}>递增</button>
  // </div>
  // }
  render(){
    let {count,name} = this.state;
    return <div>
      <p>name:{name}</p>
      <p>count:{count}</p>
      <button onClick={()=>{
          this.setState(function(){
            count++;
            return {
              count
            }
          },()=>{
            console.log("组件更新完成");
          })
      }}>递增</button>
  </div>
  }
}

export default App;