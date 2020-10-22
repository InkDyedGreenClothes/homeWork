import { combineReducers, createStore } from "redux";
// action 一定不能重名
function count(count=1,action) {
  switch (action.type) {
    case "COUNT_ADD":
    return count + 1;    
  }
  return count;
}
function messageList(messageList=[
    {
      id: 0,
      name: "帅哥",
      message: "真困，想睡觉，不想学了",
      selected: false
    }, {
      id: 1,
      name: "Ellen",
      message: "就是就是不学了",
      selected: false
    }
  ], action) {
  let nowData = [...messageList];
  switch (action.type) {
    case "ADD":
      return {
        data: [...nowData, {
          id: Date.now(),
          name: action.name,
          message: action.message,
          selected: false
        }]
      }
    case "SELECTED":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            selected: action.selected
          }
        }
      })
      return { data: nowData };
    case "EDIT":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            message: action.message
          }
        }
      })
      return {
        data: nowData
      }

  }
  return messageList;
}
const store = createStore(combineReducers({
  messageList,
  count
}));
export { store };