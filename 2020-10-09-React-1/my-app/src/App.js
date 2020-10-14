import React, { Component } from 'react';
import './index.css'
import data from './data';
import List from './list'
class App extends Component {
    render() {
        return <div className="friend-list">
            {data.map((item, index) => {
                return <List
                    data={item}
                    key={index}></List>
            })}
        </div>
    }
}
export default App