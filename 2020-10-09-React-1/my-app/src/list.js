import React, { Component } from 'react';

// 创建list 类组件
class List extends Component {
    state = {
        show: false
    }
    render() {
        let { name, children } = this.props.data;
        let { show } = this.state;
        return <dl className={show ? 'expanded friend-group' : 'friend-group'}>
            <dt onClick={() => {
                this.setState({
                    show: !show
                })
            }}>{name}</dt>
            {children.map((item, index) => {
                return <dd key={index}>{item}</dd>
            })}
        </dl>
    }
}
export default List