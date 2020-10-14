import React,{ Component } from "react";
import Dl from "./Dl";
import data from "./data";
class App extends Component {
  state={
    openName:"" //当前哪一项展开，为空则都不展开
  }
  setOpen=(openName)=>{
    this.setState({
      openName
    })
  }
  render(){
    let {openName} = this.state;
    return <div className="friend-list">
      {Object.keys(data).map((item,index)=>{
        return <Dl 
          key={index} 
          name={item}
          data={data[item]} 
          setOpen={this.setOpen}
          openName={openName}
        />
      })}
  </div>
  }
}

export default App;