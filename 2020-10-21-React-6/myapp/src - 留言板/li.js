import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux"
// <li className="editing">
function Li(props) {
  let {id,name,message,selected} = props.data;
  let dispatch = useDispatch();
  let [edit,setEdit] = useState(false);
  let editText = useRef();
  const [editVal,setEditVal] = useState(message);
  useEffect(()=>{
    if(edit){
      editText.current.focus();
    }
  },[edit])
  return  <li className={edit?"editing":""}>
          <h3>{name}</h3>
          <input 
            type="checkbox" 
            checked={selected}
            onChange={({target})=>{
              dispatch({
                type:"SELECTED",
                id,
                selected:target.checked
              })
            }}
          />
          <p onDoubleClick={()=>{
            setEdit(true)
          }}>{message}</p>
          <textarea 
            ref={editText}
            onBlur={()=>{
              if(editVal.trim()){
                  dispatch({
                    type:"EDIT",
                    id,
                    message: editVal
                  })
              } else {
                setEditVal(message);
              }
              setEdit(false);
            }}
            value={editVal}
            onChange={({target})=>{
              setEditVal(target.value);
            }}
          ></textarea>
          <a>删除</a>
      </li>
}
export default Li;