import React, { Component, Fragment } from "react";
import Child from "./child";
class App extends Component {
  render() {
    return <div>
    
        {/* <Child>
            <div>123</div>
        </Child> */}
        <Child 
            child={<div>123</div>}
        />
    </div>
  }
}

export default App;