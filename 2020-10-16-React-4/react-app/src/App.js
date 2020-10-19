import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import View404 from './view/404view';
import AboutView from './view/aboutview';
import IndexView from './view/indexview';
import JoinView from './view/joinview';
/*
  Route 路由
    根据 url规则，去匹配不同的视图
    path 该路由要匹配的 url
        - path 默认是模糊匹配，即当前 url 以该 path 为开始时就进行匹配
        - exact 精确匹配，则 当前 url 必须 和 path 一致时才会进行匹配 (path: /join, /join|/join/)
        - strict 严格匹配, url === path (path: /join, /join) 使用 strict 时，该 route 必须 先设置 exact
        - 多规则匹配 [path1,path2,path3]
    component 匹配成功之后要显示的视图
  Switch
*/
function App() {
  return <div id="box">
      <Nav />
      <Switch>
        <Route 
            path={["/","/home"]}
            exact
            component={IndexView}
        />
        <Route 
            path="/about"
            component={AboutView}
        />
        <Route 
            path="/join"
            exact
            strict
            component={JoinView}
        />
        <Route 
          component={View404}
        />
      </Switch>
  </div>;
}

export default App;
