import React from "react";
import Add from "./add";
import "./index.css";
import Message from "./message";
import Sum from "./sum";
function App() {
  return  <section className="wrap">
  <h2 className="title">留言板</h2>
  <Add />
  <Message />
  <Sum />
</section>
}
export default App;