import React from 'react';
import './index.css'
import Add from './add';
import Ul from './ul';
import Sum from './sum';

function App() {
  return (
    <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <Add></Add>
        <Ul></Ul>
        <Sum></Sum>
      </div>
    </div>
  );
}

export default App;
