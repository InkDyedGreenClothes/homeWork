import { useEffect, useState } from "react";
// 自定义 hook 必须以 use 为开始命名
// 调用 useScroll 返回实时滚动条位置
function useScroll() {
  let [state,setState] = useState(0);
  let scroll = ()=>{
    setState(window.scrollY);
  }
  useEffect(()=>{
      window.addEventListener("scroll",scroll);
      setState(window.scrollY);
      return ()=>{
        window.removeEventListener("scroll",scroll);
      }
  },[]);
  return [state,(newScroll)=>{
      window.scrollTo(0,newScroll);
      setState(window.scrollY);
  }];
}

export {useScroll}