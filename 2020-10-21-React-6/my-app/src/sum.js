import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"

function Sum() {
    const data = useSelector(state => state.data)
    let dispatch = useDispatch();
    let okData = data.filter(item => item.selected)
    let onData = data.filter(item => !item.selected)
    return (
        <div id="todo-stats">
            <span className="todo-count">
                <span className="number">{onData.length}</span>
                <span className="word">项待完成</span>
            </span>
            <span className="todo-clear">
                <span>
                    <span className="clear-all"
                        onClick={() => {
                            dispatch({
                                type: 'DELETE_ALL'
                            })
                        }}
                    > Clear </span>
                    <span>{okData.length}</span>
                      已完成事项， 
                    <span>共 {data.length} 条事项</span>
                </span>
            </span>
        </div>
    );
}

export default Sum;