import React from 'react';
import Header from '../Header';
import './postView.css'

import heart from '../../images/heart.png';
import share from '../../images/share.png'
import image1 from '../../images/download.jpg'
import { Link } from 'react-router-dom';




export default function PostView() {

  return <>
  <Header />
  <div id="card-container">
    <div id='post-card'>
      <div id='part-1'>
        <h4>Siva</h4>
        <h4>...</h4>
      </div>
      <p id='location'>Bengaluru</p>
      <div id='img-container'>
        <img src={image1} alt='' accept='image/*' />
      </div>
      <div id='part-2'>
        <div id='icon-container'>
          <div className='isolate-container'>
            <Link to='#'>
            <img src={heart} alt='like' />
            </Link>
            
          </div>
          <div className='isolate-container'>
            <img src={share} alt='share' />
          </div>
        </div>
        <p id='date'>Date</p>
      </div>
      <p id='likes-count'>0 likes</p>
      <h4 id='comment-container'>Kick start your career with a bang</h4>
    </div>
  </div>
  </>
  ;
}
