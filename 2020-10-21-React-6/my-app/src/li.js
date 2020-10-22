import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux"

function Li(props) {
    let { id, message, selected } = props.data;
    let [editVal, setEditVal] = useState(message);
    let dispatch = useDispatch();
    let editText = useRef();
    let [edit, setEdit] = useState(false);
    useEffect(() => {
        if (edit) {
            editText.current.focus();
        }
    }, [edit])
    return (
        <li
            className={edit ? 'editing' : ''}
            onDoubleClick={() => {
                setEdit(true)
            }}>
            <div className="todo">
                <div className="display">
                    <input
                        className="check"
                        type="checkbox"
                        checked={selected}
                        onChange={({ target }) => {
                            dispatch({
                                type: "SELECTED",
                                id,
                                selected: target.checked
                            })
                        }} />
                    <div className="todo-content">{message}</div>
                    <span className="todo-destroy" onClick={() => {
                        dispatch({
                            type: "DELETE",
                            id
                        })
                    }}></span>
                </div>
                <div className="edit">
                    <input
                        ref={editText}
                        className="todo-input"
                        type="text"
                        value={editVal}
                        onChange={({ target }) => {
                            setEditVal(target.value)
                        }}
                        onBlur={() => {
                            if (editVal.trim()) {
                                dispatch({
                                    type: "EDIT",
                                    id,
                                    message: editVal
                                })
                            } else {
                                setEditVal(message);
                            }
                            setEdit(false)
                        }}

                    />
                </div>
            </div>
        </li>
    );
}

export default Li;
