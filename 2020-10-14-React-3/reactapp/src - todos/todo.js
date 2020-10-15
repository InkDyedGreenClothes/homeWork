import React, { PureComponent,createRef } from "react";
/*
  PureComponent 和 Component 功能完全一致，只是在组件更新时，会对 props/state 做一个浅对比，如果为true则不更新组件 
  使用 PureComponent 要记住，如果修改的数据是引用类型，一定返回一个新的引用 


  ref 用于获取 组件实例或真实DOM节点


  编辑todo:
    退出编辑时，如果输入框中的内容，不为空，则更新至 state，否则 还保留原来的title
    再编辑时，需要有地方存储编辑前title

*/
export default class Todo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit:false,
      val:props.data.title 
    }
    //组件初始化时，在 state 中，复制了title
  }
  editText=createRef();
  display = createRef();
  // componentDidMount(){
  //   console.log(this.editText.current);
  //   console.log(this.display.current);
  // }
  componentDidUpdate(prevProps,pervState){
      if(!pervState.edit&&this.state.edit){
        this.editText.current.focus();
      }
  }
  render(){
    let {data,remove,changeDone,editTitle} = this.props;
    let {id,title,done} = data;
    let {edit,val} = this.state;
    return <li className={edit?"editing":""}>
      <div className={"todo "+ (done?"done":"")}>
        <div 
          className="display"
          ref={this.display}
        >
          <input 
            className="check" 
            type="checkbox"
            checked={done}
            onChange={({target})=>{
              changeDone(id,target.checked)
            }}
          />
          <div 
            className="todo-content"
            onDoubleClick={()=>{
              this.setState({
                edit:true
              })
            }}
          >{title}</div>
          <span className="todo-destroy" onClick={()=>{
              remove(id);
          }}></span>
        </div>
        <div className="edit">
          <input 
            className="todo-input" 
            type="text"
            ref={this.editText}
            value={val}
            onChange={({target})=>{
              // 修改时先修改复制出来的title
              this.setState({
                val: target.value
              })
            }}
            onBlur={()=>{
              // 退出编辑时，判断是否为空
              if(val.trim()){
                  // 不为空，则将title同步至父级
                  editTitle(id,val);
              } else {
                  // 为空，则恢复本身的title
                  this.setState({
                    val:title
                  })
              }
              this.setState({
                edit:false
              })
            }}  
          />
        </div>
      </div>
    </li>
  }
}