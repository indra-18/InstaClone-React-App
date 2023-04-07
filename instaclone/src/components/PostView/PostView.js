import React, { useContext } from 'react';
import Header from '../Header';
import './postView.css'

import heart from '../../images/heart.png';
import share from '../../images/share.png';
import { Link } from 'react-router-dom';
import { PostContext } from '../contexts/postContext';

export default function PostView() {
  const {posts} = useContext(PostContext);
  return (
    <>
      <Header />
      <div className='list-container'>
        {posts.length === 0 ? (
          <h2>No Post Available...</h2>
        ) : (
          posts.map((post) => (
            <div id='card-container' key={post.id}>
              <div id='post-card' >
                <div id='part-1'>
                  <h4>{post.author}</h4>
                  <h4>...</h4>
                </div>
                <p id='location'>{post.location}</p>
                <div id='img-container'>
                  <img src={post.image} alt='' accept='image/*' />
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
                  <p id='date'>{post.date}</p>
                </div>
                <p id='likes-count'>{post.likes} likes</p>
                <h4 id='comment-container'>{post.comment}</h4>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
