import React, { useState } from 'react';
import Header from '../Header';
import './form.css'

export default function PostForm() {

  const [formData, setFormData] = useState({
    image: null,
    author:'',
    location:'',
    description:''
  })

  function captureForm(e) {
    e.preventDefault();
    console.log(formData)
  }
  
  return <div id='form-parent'>
    <Header />
    <div id='form-container'>
      <form onSubmit={captureForm}>
        <div>
          <input type='file' name="Image" placeholder='No file chosen' required className='main-fields'
          onChange={(e) => setFormData({
            ...formData,
            image: e.target.value
          })}
          />
          {/* <button>Browse</button> */}
        </div>
        <div id='two-fields'>
        <div>
          <input placeholder='Author' name="author" required 
          onChange={(e) => setFormData({
            ...formData,
            author: e.target.value
          })}
          />
          <input placeholder='Location' name="location" required 
          onChange={(e) => setFormData({
            ...formData,
            location: e.target.value
          })}
          />
        </div>
        </div>
        <div>
          <input placeholder='Description' name="description" required className='main-fields'
          onChange={(e) => setFormData({
            ...formData,
            description: e.target.value
          })}
          />
        </div>
        <div id='postbtn-container'>
          <button>Post</button>
        </div>
      </form>
    </div>
  </div>
}