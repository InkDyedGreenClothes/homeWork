import React,{ Component } from "react";
import SubChild from "./subchild";
class Child extends Component {
  render(){
    return <SubChild />
  }
}

export default Child;