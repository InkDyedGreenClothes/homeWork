import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import View404 from './view/404view';
import AboutView from './view/aboutview';
import IndexView from './view/indexview';
import JoinView from './view/joinview';
import "./index.css";
import ListView from './view/list';
/*
  通过 Route 去调用视图
    component 通过组件直接调用
    render 中接收是回调函数，回调函数的返回值中定义该 Route 要渲染的视图
  
  路由组件：被 Route 直接调用的组件，叫做路由组件
  在路由组件中，可以获取到 Route 传递的路由参数 
  路由参数:
    history:
      go(n) 跳转当前的历史记录，跳转 n 步  负值回退，正值前进
      goBack() 返回历史记录上一步
      goForward() 前进到历史记录下一步
      push(url,state) 在不刷新的情况下跳转 url
      length  当前历史记录中记录了多少项
    location:
      hash: "" 当前url中的hash值
      pathname: "/join" 当前的url
      search: "" 当前 url 的 search 值
      state: push 方法传递过来的数据
    match: 当前路由的匹配信息
      isExact: true  是否精确匹配
      params: {} 动态路由传递的参数
      path: ""  当前 Route path 属性
      url: "" 当前 url 中被匹配成功的一段
  动态路由：
    动态路由在定义path时，路由中某一段可能是非固定的，非固定部分可以通过 :name,来定义,在路由参数中 可通过match.params来获取动态路由具体的值

  通过 render 调用视图组件：
    1. 路由参数会被传递给 render 的回调函数

  Redirect 重定向
*/
function App() {
  const [username,setUser] = useState("");
  return <div id="box">
      <Nav />
      <Switch>
        <Route 
            path={["/","/home"]}
            exact
            render={(routeProps)=>{
              // console.log(routeProps);
              return <IndexView {...routeProps} username={username} />
            }}
        />
        <Route 
            path="/about"
            component={AboutView}
        />
        <Route 
            path="/join"
            component={JoinView}
        />
        <Route 
            path="/list/:page"
            render={()=>{
                if(username){
                  return <ListView />
                }
                return <Redirect to="/" />
            }}
        />
        <Route 
          component={View404}
        />
      </Switch>
  </div>;
}

export default App;
