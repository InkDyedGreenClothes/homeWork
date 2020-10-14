import React,{ Component } from 'react';
import List from './list'
export default class Add extends Component {

    render() {    
        // console.log(this.props)
        let {data} = this.props;
        return <div className="addMessage">
            <input type="text" placeholder="请输入昵称" />
            <textarea placeholder="请输入留言"></textarea>
            <button>提交留言</button>
            <List 
                data={data}
            />
        </div>
    }
}
