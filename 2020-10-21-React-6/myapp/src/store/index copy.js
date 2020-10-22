import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
/*
  thunk 中间件：使 action 支持 函数
    - 如果 action 是对象的话，则 直接调用 reducer 发起修改
    - 如果 action 是函数，则 执行该函数，并讲 getState 和 dispatch 传递给该函数
*/
function reducer(state={data:[]},action) {
    switch (action.type) {
      case "ADD":
        return {
          data: action.data
        }
    }
    return state;
}
const store = createStore(reducer,applyMiddleware(thunk));


function getData(dispatch,getState) {
  fetch("https://cnodejs.org/api/v1/topics").then((res)=>{
    return res.json()
  }).then((res)=>{
    dispatch({
      type:"ADD",
      data: res.data
    })
  })
}
export { store,getData };
