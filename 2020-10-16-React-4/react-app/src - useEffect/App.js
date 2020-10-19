import React from 'react';
import Child from './child';
/*
  函数式组件（无状态组件|纯渲染组件）
    return 返回我们要构建的视图
    在 React 16.7 之前函数式组件没有 state 也没有生命周期  
  
  Hooks 
*/
function App() {
  return <div>
      <Child 
        content={"帅哥"}
      />
  </div>;
}

export default App;
