import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav';
import './css/index.css'
import AboutView from './view/aboutView';
import IndexView from './view/indexView';
import JoinView from './view/joinView';

function App() {
  return (
    <div>
      <header className="header">
        <div className="wrap">
          <h1 id="logo">KaiKeBa</h1>
          <Nav />
        </div>
      </header>
      <Switch>
        <Route
          path={["/", "/home"]}
          exact
          component={IndexView}
        />
        <Route
          path="/about"
          exact
          strict
          component={AboutView}
        />
        <Route
          path="/join"
          exact
          strict
          component={JoinView}
        />
      </Switch>
    </div>
  );
}

export default App;
