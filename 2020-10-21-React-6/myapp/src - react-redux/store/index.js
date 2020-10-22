import {createStore} from "redux";

function reducer(state={
  count: 1,
  name: "kkb"
},action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        count:state.count + 1
      }
  }
  return state;
}
const store = createStore(reducer);

export {store};