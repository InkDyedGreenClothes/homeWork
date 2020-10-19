import React, { useEffect, useRef, useState } from 'react';
/*
  - useRef
    用户关联原生DOM节点，或者用来记录组件更新前的一些数据
    当 useRef 存储的是数据，而非获取DOM或组件实例时，源数据改变 ref 中存储的数据并不会随之改变，需要我们手动改变,通过 ref 的该特性就可以夸组件的更新阶段传递信息换句话说，我们可以通过 ref 来获取组件更新前的信息
*/
function Child() {
  const [count,setCount] = useState(1);
  const [val,setVal] = useState("");
  const div = useRef();
  const update = useRef(count);
  useEffect(()=>{
    console.log(div.current);
    console.log(update.current,count);
    update.current = count;
  })
  return <div ref={div}>
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
