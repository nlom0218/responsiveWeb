import React from 'react';
import BackHome from '../../Components/BackHome';
import img from "./source/img_01.jpg"

const Viewport = () => {
  return (<div>
    <BackHome />
    <img src={img}></img>
  </div>);
}

export default Viewport;