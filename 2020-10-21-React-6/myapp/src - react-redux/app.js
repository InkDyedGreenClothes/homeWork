import React from "react";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
/*
如何在组件中获取 redux 的 store:
  1. connect 高阶组件 (传入函数，返回一个新的函数)，将组件需要的state，以及dispatch 传给组件
      - connect(callback)
      - callback 必须有一个对象类型的返回值，该返回值决定了哪些参数需要传递给组件
      - connect 本调用后 会返回一个高阶组件

  2. react-redux 提供的 hooks (7):
    - useDispatch 获取 dispatch
    - useStore 获取 store
    - useSelector 获取 state  
*/
// function App(props) {
//   console.log(props);
//   let {count,dispatch} = props;
//   return <div>
//       <p>{count}</p>
//       <button onClick={()=>{
//         dispatch({
//           type: "ADD"
//         })
//       }}>递增</button>
//   </div>
// }
// // let newApp = connect(state=>{
// //     return {
// //       count: state.count
// //     };
// // })(App)
// export default connect(state=>({count:state.count}))(App);

function App() {
  const count = useSelector(state=>state.count); 
  const dispatch = useDispatch();
  //console.log(useStore());
  return <div>
      <p>{count}</p>
      <button onClick={()=>{
        dispatch({
          type: "ADD"
        })
      }}>递增</button>
  </div>
}
export default App;