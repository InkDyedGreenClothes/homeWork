import React from 'react';
import {Link, useParams} from 'react-router-dom';
import data from "../data";

function Pagination() {
  const {type="good",page=1} = useParams();
  let nowData = data[type];
  const len = 5;
  const pageLen = Math.ceil(nowData.length/len);
  function setNub() {
      let nubs = [];
      for(let i = 1;i<=pageLen;i++){
        if(i == page){
          nubs.push(<span key={i}>{i}</span>);
        } else {
          nubs.push(<Link to={`/list/${type}/${i}`} key={i}>{i}</Link>);
        }
       
      }
      return nubs;
  }
  return <nav>{setNub()}</nav>;
}
export default Pagination;
