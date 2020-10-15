import React, { Component } from "react";
let inner = `<style>div{background:red}</style><div>123</div>`
class App extends Component {
  render() {
    return <div
      dangerouslySetInnerHTML={{
        __html:inner
      }}
    >
    </div>
  }
}

export default App;