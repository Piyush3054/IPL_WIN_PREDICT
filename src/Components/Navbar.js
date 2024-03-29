import React, { useState } from 'react';
import Predict from './Predict';
import LivePredict from './LivePredict';
import Home from './Home';
import Team from './Team';
import { Link, NavLink } from 'react-router-dom';
import './mystyles.css'


export default function Navbar() {

  return (
      <div className='navbar-container'>
        <h1>IPL WIN PREDICTION</h1>
        <div className='navbar-option'>
          <Link to="/" className="active-link"  >Home</Link>
          <Link to="/predict" className="active-link"  >Predict</Link>
          <Link to="/livepredict" className="active-link"  >Live Predict</Link>
          <Link to="/team" className="active-link"  >Teams</Link>
          <Link to="/stats" className="active-link"  >Stats</Link>
        </div>
      </div>
  );
}
