import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

export default function List() {
  const { type="all", page = 1 } = useParams();
  let nowData = []
  if (type == 'all') {
    nowData = [...data['good'], ...data['ask'], ...data['share']];
  } else {
    nowData = data[type];
  }
  const len = 5; //每页显示5条
  let start = (page - 1) * len;
  let end = start + len;
  nowData = nowData.filter((item, index) => (index >= start && index < end));
  return <ul className="list">
    {nowData.length ? nowData.map(item => <li key={item.id}>{item.title}</li>) : "暂无数据"}
  </ul>
}