import React, { Component, Fragment } from "react";
import "./index.css";
import AddTodo from "./addTodo";
import List from "./list";
import Title from "./title";
import Stats from "./stats";
class App extends Component {
  state = {
    data: [
      {
        id: 0,
        title: "这是第一条todo",
        done: false
      }, {
        id: 1,
        title: "这是第二条todo",
        done: true
      }, {
        id: 3,
        title: "这是第3条todo",
        done: true
      }, {
        id: 4,
        title: "这是第4条todo",
        done: true
      }, {
        id: 5,
        title: "这是第5条todo",
        done: true
      }
    ],
    list:{}
  }
  add = (newTodo) => {
    let { data } = this.state;
    data.unshift({
      id: Date.now(),
      title: newTodo,
      done: false
    });
    this.setState({
      data
    })
  }
  remove = (id) => {
    let { data } = this.state;
    this.setState({
      data: data.filter(item => item.id !== id)
    })
  }
  removeDone = ()=>{
    let { data } = this.state;
    this.setState({
      data: data.filter(item => !item.done)
    })
  }
  changeDone = (id, done) => {
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], done: done }
        break;
      }
    }
    this.setState({
      data
    })
  }
  editTitle = (id,title)=>{
    let { data } = this.state;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i] = { ...data[i], title}
        break;
      }
    }
    this.setState({
      data
    })
  }
  addList=(id,newList)=>{
    let {list} = this.state;
    list[id] = newList;
    this.setState({
      list
    })
    console.log(list);
  }
  removeList = (id)=>{
    let {list} = this.state;
    delete list[id];
    this.setState({
      list
    });
  }
  collide = (drag,id)=>{
    let {list,data} = this.state;
    let dragRect = drag.getBoundingClientRect();
    let dragTo = -1;//位置不变
    for(let listId in list){
        if (id === listId) {
            continue;
        }
        let nowList = list[listId];
        let nowRect = nowList.getBoundingClientRect();
        /*
            中心点的碰撞检测:
              获取 nowRect 中心点
              获取 dragRect 中心点
                  nowRect至dragRect距离小于 li 高度
                    dragRect > nowRect
                      放在 nowRect 之后
                      否则 之前
        */
        if(nowRect.top <= dragRect.top
          &&nowRect.bottom >= dragRect.top){
            dragTo = listId;
          break;
        }
    }
    if(dragTo > -1){
      let now = data.filter(item=>item.id === id)[0];
      data =  data.filter(item=>item.id !== id)
      let toIndex = data.findIndex(item=>{
        return  item.id==dragTo
      });
      data.splice(toIndex,0,now);
      this.setState({
        data
      })
    }
  }
  render() {
    let { data } = this.state;
    return <div id="todoapp">
      <Title />
      <div className="content">
        <AddTodo
          add={this.add}
        />
        {
          data.length > 0 && (<Fragment>
            <List
              data={data}
              remove={this.remove}
              changeDone={this.changeDone}
              editTitle = {this.editTitle}
              collide = {this.collide}
              addList = {this.addList}
              removeList = {this.removeList}
            />
            <Stats
              data={data}
              removeDone = {this.removeDone}
            />
          </Fragment>)
        }
      </div>
    </div>
  }
}

export default App;