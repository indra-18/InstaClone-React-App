import React from 'react';
import Header from '../Header';
import './postView.css'

import heart from '../../images/heart.png';
import share from '../../images/share.png'




export default function PostView() {

  return <>
  <Header />
  <hr />
  <div id="card-container">
    <div id='post-card'>
      <div id='part-1'>
        <h4>Siva</h4>
        <h4>...</h4>
      </div>
      <p id='location'>Bengaluru</p>
      <div id='img-container'>
        <img src='' alt='' />
      </div>
      <div id='part-2'>
        <div id='icon-container'>
          <div>
            <img src={heart} alt='like' />
          </div>
          <div>
            <img src={share} alt='share' />
          </div>
        </div>
        <p id='date'>Date</p>

      </div>
      <h4 id='comment-container'>Kick start your career with a bang</h4>
    </div>
  </div>
  </>
  ;
}
