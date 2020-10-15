import React, { Component } from "react";
class Child extends Component {
  render() {
    console.log(this.props);
    return <div>
        {this.props.child}
    </div>
  }
}

export default Child;