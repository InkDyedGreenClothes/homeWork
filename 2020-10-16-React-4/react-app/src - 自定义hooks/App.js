import React from 'react';
import { useScroll } from './hooks';
function App() {
  const [scroll,setScroll] = useScroll();
  return <div id="box">
      <style>
      {
        `
        #box div {
           width: 300px;
           height: 300px; 
           border: 1px solid #000;
        } 
        #box span {
          position:fixed;
          left: 0;
          top: 300px;
          background: red;
          color: #fff;
          width: 100px;
          font: 30px/60px "宋体";
          text-align: center; 
        } 
        `
      }
      </style>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
      <div>11</div>
      <div>12</div>
      <div>13</div>
      <span onClick={()=>{
          setScroll(0)
      }}>{scroll}</span>
  </div>;
}

export default App;
