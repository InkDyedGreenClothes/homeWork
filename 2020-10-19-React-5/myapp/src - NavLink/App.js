import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import View404 from './view/404view';
import AboutView from './view/aboutview';
import IndexView from './view/indexview';
import JoinView from './view/joinview';
import "./index.css";
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
