import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
/*
  每页显示 5 条
  1: 0-5  0,1,2,3,4
  2: 5-10 5,6,7,8,9
  3: 10-15 10,11,12,13,14
*/
export default function List() {
  const {type="good",page=1} = useParams();
  console.log(type,page);
  let nowData = data[type];
  const len = 5; //每页显示5条
  let start = (page-1)*len;
  let end  = start + len;
  nowData = nowData.filter((item,index)=>(index>=start&&index<end));
  return <ul>{nowData.length?nowData.map(item=><li key={item.id}>{item.title}</li>):"暂无数据"}</ul>
}