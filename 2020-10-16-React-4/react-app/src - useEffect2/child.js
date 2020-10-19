import React, { useEffect, useState } from 'react';
/*
  函数式组件（无状态组件|纯渲染组件）
    return 返回我们要构建的视图
    在 React 16.7 之前函数式组件没有 state 也没有生命周期
    函数组件在组件更新时，是将整个函数重新执行  

  常用 hooks(钩子函数)：
    - useState  
    `const [state, setState] = useState(initialState);`
            let [状态,修改该状态的方法] = useState(初始值);
            1. 在同一个组件中可以使用 useState 定义多个状态
            2. 注意 useState 返回的 setState 方法，不会进行对象合并
            3. 注意 useState 返回的 setState 方法同样是异步方法
    - useEffect (副作用 hook)
        useEffect(()=>{
          //副作用函数
          return ()=>{
            // 副作用函数的返还函数
          }
        },[依赖参数])

          依赖参数: 监听对应参数修改时，或组件挂载时执行
              - 当不写依赖参数时，只要组件更新就会执行 副作用函数
              - 当 依赖参数为[] 时，副作用函数只在挂载完之后执行

        类组件
            componentDidMount、componentDidUpdate 和 componentWillUnmount
        需要清除的副作用    

          挂载阶段：
            render --> 副作用函数
          更新阶段: 
            render --> 返回函数(即将更新) --> 完成更新(副作用函数)
          卸载阶段:
            返回函数(即将卸载)

    副作用:
      DOM 操作、异步    
*/
let isUpdate = false;
function Child() {
  let [count,setCount] = useState(1);
  let [val,setVal] = useState("");
  useEffect(()=>{
    console.log("挂载完成之后执行");
    return ()=>{
      console.log("组件即将卸载")
      isUpdate = false;
    }
  },[])
  useEffect(()=>{
    if(isUpdate){
      console.log("更新完成之后执行");
    } else {
      isUpdate = true;
    }
  })
  return <div>
      <input type="text" onChange={({target})=>{
        setVal(target.value)
      }}></input>
      <p>{val}</p>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>递增</button>
  </div>;
}

export default Child;
