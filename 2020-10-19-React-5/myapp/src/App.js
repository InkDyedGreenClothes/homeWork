import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './component/nav';
import "./index.css";
import { route_list } from './route_list';
function App() {
  return <div className="wrap">
      <Nav />
      <Switch>
        {route_list.map((item,index)=>{
            return <Route 
              key={index} 
              exact={item.exact} 
              path={item.path}
              render={(props)=>{
                  return item.render(props);
              }}
            />
        })}
      </Switch>
  </div>;
}

export default App;
