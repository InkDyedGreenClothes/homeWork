import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from "../data";

function Pagination() {
  const { type = 'all', page = 1 } = useParams();
  let nowData = []
  if (type == 'all') {
    nowData = [...data['good'], ...data['ask'], ...data['share']];
  } else {
    nowData = data[type];
  };
  const len = 5;
  const pageLen = Math.ceil(nowData.length / len);
  function setNub() {
    let nubs = [<Link to={`/${type}/${page - 1}`} key={page - 1}>上一页</Link>];
    for (let i = 1; i <= pageLen; i++) {
      if (i == page) {
        nubs.push(<Link to={`/${type}/${i}`} key={i + Date.now()}>{i}</Link>);
      } else {
        nubs.push(<Link to={`/${type}/${i}`} key={i + Date.now()}>{i}</Link>);
      }
    }
    nubs.push(<Link to={`/${type}/${Number(page) + 1}`} key={Number(page) + 1}>下一页</Link>)
    return nubs;
  }
  return <nav className="nav">{setNub()}</nav>;
}
export default Pagination;
