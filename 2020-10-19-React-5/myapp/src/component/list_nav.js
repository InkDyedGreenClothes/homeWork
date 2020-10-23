import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { list_navs } from "../route_list";
/*
  /list 列表的视图的首页 ---> /list/good/1

  /list/good/:page 精华列表 
  /list/good ---> /list/good/1
  /list/share/:page 分享列表
  /list/share ---> /list/share/1 
  /list/share/:ask 问答列表



  /list ---> /list/good/1
  /list/:type(good|share|ask) --> /list/:type/1
  /list/:type/:page --> /list/:type/:page 
*/
export default function ListNav() {
  const {pathname} = useLocation();
  return <nav className="subNav">
    {
      list_navs.map((item,index)=>{
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