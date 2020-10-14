import React,{ Component } from "react";
import context,{Consumer} from "./context"
// class SubChild extends Component {
//   state={
//     count: 1
//   }
//   render(){
//     let {count} = this.state;
//     return <Consumer>
//       {(context)=>{
//           console.log(context);
//       }}
//     </Consumer>
//     {/* <div>
//       <p>name:{name}</p>
//       <p>count:{count}</p>
//       <button onClick={()=>{
//           this.setState(function(){
//             count++;
//             return {
//               count
//             }
//           })
//       }}>递增</button>
//       <button onClick={()=>{
//           setName("开课吧");
//       }}>中文名</button>
//   </div> */}
//   }
// }
class SubChild extends Component {
  state={
    count: 1
  }
  static contextType = context;
  render(){
    let {count} = this.state;
    console.log(this.context);
    return <div></div>
    {/* <div>
      <p>name:{name}</p>
      <p>count:{count}</p>
      <button onClick={()=>{
          this.setState(function(){
            count++;
            return {
              count
            }
          })
      }}>递增</button>
      <button onClick={()=>{
          setName("开课吧");
      }}>中文名</button>
  </div> */}
  }
}
//SubChild.contextType = context;

export default SubChild;