import React, { useState } from 'react';
/*
  函数式组件（无状态组件|纯渲染组件）
    return 返回我们要构建的视图
    在 React 16.7 之前函数式组件没有 state 也没有生命周期
    函数组件在组件更新时，是将整个函数重新执行  

  常用 hooks(钩子函数)：
    `const [state, setState] = useState(initialState);`
            let [状态,修改该状态的方法] = useState(初始值);
            1. 在同一个组件中可以使用 useState 定义多个状态
            2. 注意 useState 返回的 setState 方法，不会进行对象合并
            3. 注意 useState 返回的 setState 方法同样是异步方法
*/
function Child() {
  // let [count,setCount] = useState(1);
  // let [name,setName] = useState("kkb");
  let [state,setState] = useState({
    name:"kkb",
    count: 1
  });
  let {name,count} = state;
  //console.log("render");
  
  return <div>
      <input 
        type="text" 
        value={name}
        onChange={({target})=>{
          setState({
            ...state,
            name:target.value
          })
        }}
      />
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={()=>{
          setState({
            ...state,
            count:count+1
          })
          //console.log("修改")
      }}>递增</button>
  </div>;
}

export default Child;
