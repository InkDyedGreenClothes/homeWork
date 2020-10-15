import React, { Component, Fragment } from 'react';
export default class Stats extends Component {
  render() {
    let { data, removeCheck, checkAll } = this.props;
    let checkNum = data.filter(item => item.done).length;
    let totalNum = data.length;
    return <Fragment>
      <div className="sum">
        <label>
          <input type="checkbox"
            onChange={({ target }) => {
              checkAll(target.checked)
            }}
          />
          <span className="deleteCheck">选中全部</span>
        </label>
        {
          checkNum > 0 &&
          <a className="deleteCheck"
            onClick={() => {
              removeCheck();
            }}
          >删除选中项</a>
        }
        <p>{checkNum > 0 && `当前选中${checkNum}项，`} {totalNum > 0 && `共${totalNum}条留言`}</p>
      </div>
    </Fragment>
  }
}
