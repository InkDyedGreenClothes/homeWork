import React from 'react';
import Li from './li';
import { useSelector } from "react-redux";

function Ul() {
    const data = useSelector(state => state.data)
    return (<ul id="todo-list">
        {data.map((item, index) =>
            <Li
                key={index}
                data={item}
            ></Li>
        )}
    </ul>
    );
}

export default Ul;
