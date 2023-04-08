import React from 'react';
import { Link } from 'react-router-dom';
import lens from '../../images/lens.png'
import './landing.css'

export default function LandingPage() {
  return <div id='landingPage-container'>
    <div className='lens-container'>
      <img src={lens} alt='lens' />
    </div>
    <div id='right-container'>
      <h2 id='head' >10x Team 04</h2>
      <div id='btn-container'>
        <Link to='/view' >Enter</Link>
      </div>

    </div>
  </div>;
}
