import React, { useEffect } from "react";
import { useSelector} from "react-redux";
import { useGetData } from "./store/action";
function App() {
  let data = useSelector(state=>state.data);
  const getData = useGetData();;
  useEffect(()=>{
    getData();
  },[])
  console.log(data);
  return  <section className="wrap">
</section>
}
export default App;