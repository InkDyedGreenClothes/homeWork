react   

### jsx语法

​	react使用它独特的jsx语法，在组建中插入html类似的语法，简化v创建iew流程。

### 原生元素

	ReactDOM.render((
		<div>
			<h1>标签</h1>
		</div>
	),document.getElementById('root'))
	
	通过简单的语法，页面就会被插入一个div+一个H1标签，原生的html元素可以被直接使用。以上的语法并不是js支持的语法，需要被转换才可以运行。

### 自定义元素

	react强大之处就在于可以组件的自定义，实现组件的复用。如果我们创建了一个组件。我们也可以通过jsx语法调用。
	
	import * as React from 'react'
	
	class Page extends React.Component {
	  render() {
	    return (<div>
	      home111 &copy; © \ua9
	    </div>)
	  }
	}
	
	ReactDOM.render((
	  <div>
	    <Page/>
	  </div>
	), document.getElementById('root'))

  我们定义了一个Page组件，可以在jsx里面像调用html一样直接调用。

### 插入动态数据

	let name = 'hi'
	
	ReactDOM.render((
	  <div>
	    {name}
	  </div>
	), document.getElementById('root'))
	
	使用{}就可以插入数据，但是{}中间的必须是js表达式，不能是语句。如果表达式的执行结果是一个数组，则会自动join。

### 属性props

	1.可以向使用html的attr一样使用属性，就像下面img的src一样 
	    let name = 'hi'
	
	    ReactDOM.render((
	      <div>
	        <img src="1.png"/>
	      </div>
	    ), document.getElementById('root'))
	2.如果需要传递动态属性，使用{}，多个属性，使用展开运算符
		let props = {
	        src: '1.png',
	        alt: '1图片'
	    }
	
	    ReactDOM.render((
	      <div>
	        <img src={"1.png"}/>
	        <img {...props}/>
	      </div>
	    ), document.getElementById('root'))

### React组件创建

	ES6 classe
	
		import * as React from 'react'
	
	    class Page extends React.Component {
	      render() {
	        return (<div>
	          home
	        </div>)
	      }
	    }
   无状态函数

   	function Button(props, context) {
            return (

 		<button>
                    <em>{props.text}</em>
                    <span>{context.name}</span>
                </button>            );
        }

### redux

	1.Store的角色是整个应用的数据存储中心，集中大部分页面需要的状态数据；
	2.ActionCreators ,view 层与data层的介质；
	3.Reduce ，接收action并更新Store。
	所以流程是 用户通过界面组件 触发ActionCreator，携带Store中的旧State与Action 流向Reducer,Reducer返回新的state，并更新界面。
	
	Reducer 会接收到action的信息。将会进行状态（数据）的处理，相当于react中的setState()的功能。如果有多个reducer ，可以使用combineReducers方法将其合并，并暴露出去。

### Router

	Router分为：
		1.react-router 核心组件
	    2.react-router-dom 应用于浏览器端的路由库（单独使用包含了react-router的核心部分）
	    3.react-router-native 应用于native端的路由
	
	安装方式：
			yarn add react-router-dom
	        # 或者，不使用 yarn
	        npm install react-router-do
	
	ReactRouter中提供了以下三大组件：
	
	    1.Router是所有路由组件共用的底层接口组件，它是路由规则制定的最外层的容器。
	    2.Route路由规则匹配，并显示当前的规则对应的组件。
	    3.Link路由跳转的组件
	
	BrowserRouter组件（主要用于浏览器中）
		BrowserRouter提供了四个属性：
			1.basename: 字符串类型，路由器的默认根路径
	        2.forceRefresh: 布尔类型，在导航的过程中整个页面是否刷新
	        3.getUserConfirmation: 函数类型，当导航需要确认时执行的函数。默认是：window.confirm
	        4.keyLength: 数字类型location.key 的长度。默认是 6

暗号：该吃药了