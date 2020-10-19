import React from 'react';
import Img from "../images/img_1.png"
import Img2 from "../images/img_2.png"
import Img4 from "../images/img4.png"

function IndexView() {
  return (
    <div>
      <img src={Img4} className="banner" />
      <div className="wrap">
        <img src={Img} />
        <img src={Img2} />
      </div>
    </div>
  );
}

export default IndexView;
