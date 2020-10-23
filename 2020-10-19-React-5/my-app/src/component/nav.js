import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav_list } from "../route_list";
export default function Nav() {
  const {pathname} = useLocation();
  return <nav className="nav">
    {
      nav_list.map((item,index)=>{
        return <NavLink 
          key={index} 
          exact={item.exact}
          to={item.to}
          isActive={item.isActive?()=>{
            return item.isActive(pathname)
          }:null}
        >{item.title}</NavLink>
      })
    }
  </nav>
}