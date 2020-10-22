import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function Add() {
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    return (<div id="create-todo">
        <input id="new-todo"
            value={message}
            placeholder="What needs to be done?"
            type="text"
            onChange={({ target }) => {
                setMessage(target.value)
            }}
            onKeyDown={({ keyCode }) => {
                //console.log(keyCode);
                if (keyCode === 13 && message.trim()) {
                    dispatch({
                        type: "ADD",
                        message
                    });
                    setMessage("");
                }
            }}
        />

    </div>
    );
}

export default Add;
