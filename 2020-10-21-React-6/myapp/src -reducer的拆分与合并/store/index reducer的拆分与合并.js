import { createStore,combineReducers } from "redux";
// reducer 的拆分
// function reducer(state={
//   list:{},
//   message:{},
//   login:{}
// },action) {
//     return {
//       list:list(state.list,action),
//       message:message(state.message,action),
//       login:login(state.login,action)
//     };
// }
function list(list={},action) {
    return list;
}
function message(message={},action) {
  return message;
}

function login(login={},action) {
   return login; 
}
// reducer 的合并
// const reducer = combineReducers({
//   list:list,
//   message:message,
//   login:login
// })
// const reducer = combineReducers({
//   list,
//   message,
//   login
// })
const store = createStore(combineReducers({
  list,
  message,
  login
}));
export { store };