import React from "react";
import { NavLink } from "react-router-dom";
/*
  NavLink  在 Link 功能的基础添加了 选中当前项的效果
  exact ** 注意 NavLink 在匹配前时，默认也是模糊匹配**
  activeClassName 当前选中项的class，默认为 active 
  activeStyle
  isActive 判断当前项是否选中 返回值为 true 选中当前，否则不选中
*/
export default function Nav() {
  return <nav className="nav">
    <NavLink to="/" 
      exact 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
      }}
      isActive={()=>{
        return true;
      }}
    >首页</NavLink>
    <span> | </span>
    <NavLink 
      to="/about" 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
      }}
    >关于</NavLink>
    <span> | </span>
    <NavLink 
      to="/join" 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
      }}
    >加入</NavLink>
    <hr />
  </nav>
}