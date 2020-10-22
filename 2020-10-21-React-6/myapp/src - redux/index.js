import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
/*
  store = createStore(reducer)
  store 仓库，容器 (管理状态)
    - getState 获取 state
    - dispatch 修改 state，调用 dispatch 时，store 会调用 reducer 函数，并将 state，和 dispatch 传入的 action，传递 reducer,在 reducer 中，监听 action.type 的不同，来返回新的 state
      - dispatch 是同步
      - action 要对 state 做怎样的修改 
        - action 本质是一个对象
        - action 有一个必写参数 type，type 描述了 该 action 要做怎样的操作
      - subscribe 监听 state 发生改变
        - subscribe 会接收一个函数，当状态改变时，则调用该函数
        - subscribe 会返回一个函数，该函数用于取消监听
  reducer 纯函数：提供操作状态的各种方式 
  纯函数：
        1. 相同的输入永远返回相同的输出
        2. 不修改函数的输入值
        3. 不依赖外部环境状态
        4. 无任何副作用
  
## redux 三大原则
- 单一数据源: 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
- State 是只读的: 唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
- 使用纯函数来执行修改 state        

*/
function reducer(state={
  count: 1
},action) {
    switch (action.type) {
      case "ADD":
        return {
          count: state.count + 1
        }
      case "MINUS":
        return {
          count: state.count - 1
        }
    }
    return state;
}
const store = createStore(reducer);
const unSubscribe = store.subscribe(()=>{
  render();
});
function render() {
  ReactDOM.render(
    <div>
        <p>{store.getState().count}</p>
        <button onClick={()=>{
           store.dispatch({
              type: "ADD"
            })
        }}>递增</button>
        <button onClick={()=>{
           store.dispatch({
              type: "MINUS"
            })
        }}>递减</button>
         <button onClick={()=>{
           unSubscribe();
        }}>取消监听</button>
    </div>,
    document.querySelector("#root")
  )
}
render();