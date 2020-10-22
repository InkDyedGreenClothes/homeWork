import { createStore } from 'redux';

function reducer(state = {
    data: [{
        id: 0,
        message: "真困，想睡觉，不想学了",
        selected: false
    }, {
        id: 1,
        message: "就是就是不学了",
        selected: true
    }]
}, action) {
    let nowData = [...state.data];
    switch (action.type) {
        case 'ADD':
            return {
                data: [...nowData, {
                    id: Date.now(),
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

        case "DELETE":
            return {
                data: nowData.filter(item => item.id !== action.id)
            }
        
            case "DELETE_ALL":
                return {
                    data: nowData.filter(item => !item.selected)
                }

    }
    return state
}

const store = createStore(reducer);
export { store }