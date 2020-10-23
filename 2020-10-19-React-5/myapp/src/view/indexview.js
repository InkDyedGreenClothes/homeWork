import React from 'react';
/*
  img 的 src
    1. 线上绝对路径
    2. 本地相对，但是要当做模块引入
    3. base 64
*/
// import img from "../img_1.png"
export default function IndexView(props) {
  console.log(props);
  return <div>
      <h1>首页视图</h1>
  </div>;
}
