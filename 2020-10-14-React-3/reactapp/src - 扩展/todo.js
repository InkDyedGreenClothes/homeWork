import React, { PureComponent,createRef } from "react";
export default class Todo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      edit:false,
      val:props.data.title 
    }
  }
  editText=createRef();
  todo = createRef();
  componentDidUpdate(prevProps,pervState){
      if(!pervState.edit&&this.state.edit){
        this.editText.current.focus();
      }
  }
  componentWillUnmount(){
    let {removeList,data} = this.props;
    removeList(data.id);
  }
  componentDidMount(){
    let {collide,addList,data} = this.props;
    let todo = this.todo.current;
    addList(data.id,todo);
    //console.log(todo);
    todo.addEventListener("mousedown",(e)=>{
        let startMouse = e.clientY;
        let newTodo = todo.cloneNode(true);
        let t = todo.getBoundingClientRect().top;
        newTodo.className += "drag";
        newTodo.style.left = todo.getBoundingClientRect().left + "px";
        newTodo.style.top =  t + "px";
        document.body.appendChild(newTodo);
        let move = (e)=>{
          let nowMouse = e.clientY;
          let disMouse = nowMouse - startMouse;
          newTodo.style.top =  t + disMouse + "px";
        }
        document.addEventListener("mousemove",move);
        document.addEventListener("mouseup",()=>{
          collide(newTodo,data.id);
          document.removeEventListener("mousemove",move);
          document.body.removeChild(newTodo);
        },{once:true})
        e.preventDefault();
    });
  }
  render(){
    let {data,remove,changeDone,editTitle} = this.props;
    let {id,title,done} = data;
    let {edit,val} = this.state;
    return <li 
      className={edit?"editing":""}
      ref={this.todo}
    >
      <div className={"todo "+ (done?"done":"")}>
        <div 
          className="display"
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