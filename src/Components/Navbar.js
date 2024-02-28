import React, { useState } from 'react';
import Predict from './Predict';
import LivePredict from './LivePredict';

export default function Navbar() {
  const [show, setShow] = useState("1");

  return (
    <div className='main-container'>
      <div className='navbar-container'>
        <h1>IPL WIN PREDICTION</h1>
        <div className='navbar-option'>
          <button onClick={() => { setShow("1") }} style={{ backgroundColor: show === "1" ? 'white' : 'transparent' ,color:show==="1" ? 'rgb(5, 1, 36)':'white'}}>Predict</button>
          <button onClick={() => { setShow("2") }} style={{ backgroundColor: show === "2" ? 'white' : 'transparent' ,color:show==="2" ? 'rgb(5, 1, 36)':'white'}}>Live Predict</button>
        </div>
      </div>
      {show === "1" && <Predict />}
      {show === "2" && <LivePredict />}
    </div>
  );
}
