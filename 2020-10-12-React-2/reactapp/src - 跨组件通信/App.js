import React,{ Component } from "react";
import Child from "./Child";
import {Provider} from "./context";
class App extends Component {
  state={
    name:"kkb"
  }
  setName=(newName)=>{
    this.setState({
      name: newName
    })
  }
  render(){
    let {name} = this.state;
    return <div>
    <Provider
      value={{
        name: name,
        setName:this.setName
      }}
    >
        <Child />
      </Provider>
  </div>
  }
}

export default App;