import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return <nav className="nav">
    {/* <NavLink to="/" 
      exact 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
      }}
      isActive={()=>{
        return true;
      }}
    >首页</NavLink> */}
    <NavLink to="/" 
      exact 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
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
    <span> | </span>
    <NavLink 
      to="/list/1" 
      activeClassName="link"
      activeStyle={{
        fontWeight: "bold"
      }}
    >列表</NavLink>
    <hr />
  </nav>
}