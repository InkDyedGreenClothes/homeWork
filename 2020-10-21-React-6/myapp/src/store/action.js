import React from "react";
import { useDispatch } from "react-redux";

function useGetData() {
  let dispatch = useDispatch();
  return ()=>{
    fetch("https://cnodejs.org/api/v1/topics").then((res)=>{
      return res.json()
    }).then((res)=>{
      dispatch({
        type:"ADD",
        data: res.data
      })
    })
  }
}

export {useGetData}