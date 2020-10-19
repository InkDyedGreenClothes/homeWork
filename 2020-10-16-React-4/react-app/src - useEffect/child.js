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

    副作用:
      DOM 操作、异步    
*/
// class Child extends Component {
//   state = {
//     data:[],
//     page:1
//   };
//   componentDidMount(){
//     //请求数据
//   }
//   componentDidUpdate(){
//     //请求数据
//   }
//   render(){
//     return <ul></ul>
//   }
// }
let isUpdate = false;
function Child() {
  let [count,setCount] = useState(1);
  let [val,setVal] = useState("");

  // useEffect(()=>{
  //   console.log("count","组件挂载完成之后，或更新之后要做的操作");
  // },[count]);
  // useEffect(()=>{
  //   console.log("val","组件挂载完成之后，或更新之后要做的操作");
  // },[val]);
  useEffect(()=>{
    console.log("挂载完成之后执行")
  },[]);
  useEffect(()=>{
    if(isUpdate){
      console.log("count 修改")
    } else {
      isUpdate = true;
    }
   
  },[count])
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
