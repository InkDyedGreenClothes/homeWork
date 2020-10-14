import React,{ Component } from "react";
import Dl from "./Dl";
import data from "./data";
class App extends Component {
  render(){
    return <div className="friend-list">
      {Object.keys(data).map((item,index)=>{
        return <Dl key={index} data={data[item]} />
      })}
  </div>
  }
}

export default App;