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
*/
let header = <header 
  id="header"
  className="header"
>
  {/* <h1>{true&&"标题"}</h1> */}
  {/* <h1>{false||"标题"}</h1> */}
  <h1>{true?"标题":"title"}</h1>
  <p>这是副标题</p>
</header>
ReactDOM.render(
  header,
  document.querySelector("#root")
);
