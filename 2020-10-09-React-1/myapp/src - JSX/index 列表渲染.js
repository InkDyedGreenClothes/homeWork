import React from "react";
import ReactDOM from "react-dom";
/*
  JSX 插值表达式:
    注意插值表达式中，接收的是一个 JS 表达式
    JS 表达式: 运行之后会有一个值的运算就叫做表达式：变量、运算、函数调用
  在JSX内容中，不同类型的值的表现：
    - 字符串、数字：原样输出
    - 布尔值、空、未定义 会被忽略
  复杂类型：
    对象: 不能在内容输出
    数组: 忽略掉，后，拼接输出
  条件渲染:
    ||、&&、?:
  复杂情况渲染：
    借助函数
*/
let off = false;
let data = [
  "列表项1",
  "列表项2",
  "列表项3"
];
let data2 = [
  "列表项A",
  "列表项B",
  "列表项C"
]
// let dataList = [
//   <li>列表项1</li>,
//   <li>列表项2</li>,
//   <li>列表项3</li>
// ]
// let list = <ul>
//   {data.map((item,index)=>{
//     return <li key={index}>{item}</li>
//   })}
// </ul>; 
function setInner() {
  let nowData = off ? data : data2;
  return nowData.map((item, index) => {
    return <li key={index}>{item}</li>
  });
}
let list = <ul>{setInner()}</ul>
ReactDOM.render(
  list,
  document.querySelector("#root")
);
