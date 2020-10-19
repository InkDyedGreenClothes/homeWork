import React, { useEffect, useRef, useState } from 'react';
function Child() {
  const [count,setCount] = useState(1);
  const [val,setVal] = useState("");
  const update = useRef(false);
  useEffect(()=>{
    console.log("componentDidMount");
    return ()=>{
      console.log("componentWillUnMount");
    }
  },[]);
  useEffect(()=>{
    if(update.current){
      console.log("componentDidUpdate");
    } else {
      update.current = true;
    }
  })
  return <div>
      <input type="text" onChange={({target})=>{
        setVal(target.value)
      }}></input>
      <p>{val}</p>
      <p>{count}</p>
      <button onClick={()=>{
        setCount(count + 1);
      }}>递增</button>
  </div>;
}

export default Child;
