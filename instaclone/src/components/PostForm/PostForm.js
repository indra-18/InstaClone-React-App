import React, { useContext, useState } from 'react';
import Header from '../Header';
import './form.css'

import { newPost } from '../../services/http-services';
import { PostContext } from '../contexts/postContext';
import { useNavigate } from 'react-router-dom';

export default function PostForm() {

  const listNavigation = useNavigate()
  const {addPost} = useContext(PostContext)

  const [formData, setFormData] = useState({
    image: null,
    author:'',
    location:'',
    description:''
  })

  function captureForm(e) {
    e.preventDefault();
    // console.log(formData)
    const formValues = new FormData(e.target);//The code creates a new instance of FormData object, which is a JavaScript object that encapsulates the data sent in an HTTP POST request.
    // console.log(formValues)
    // const formValues = formData
    formValues.append('date', new Date().toDateString())
    formValues.append('likes', 0)
    formValues.append('id',"" + new Date().getTime())
    // console.log(formValues)

    newPost(formValues).then(res => {
      console.log(res)
      // console.log(res.result)
      if (res.status === "Success") {

      addPost(res.result);
        setFormData({
          image: null,
          name: '',
          location: '',
          description: ''
        })
        console.log('Post Created')
        listNavigation('/view')
      }
      else {
        console.log('Post Data Unsuccessful')
      }
    })
  }


  
  return <div id='form-parent'>
    <Header />
    <div id='form-container'>
      <form onSubmit={captureForm}>
        <div>
          <input type='file' name="image" placeholder='No file chosen' accept='image/*' required className='main-fields'
          onChange={(e) => {setFormData(prevData => {
            return {
              ...prevData,
              image: e.target.files[0]
            }
          })}}
          />
          {/* <button>Browse</button> */}
        </div>
        <div id='two-fields'>
        <div>
          <input placeholder='Author' name="author" required 
          onChange={(e) => {setFormData(prevData => {
            return {
              ...prevData,
              author: e.target.value
            }
          })}}
          />
          <input placeholder='Location' name="location" required 
          onChange={(e) => {setFormData(prevData => {
            return {
              ...prevData,
              location: e.target.value
            }
          })}}
          />
        </div>
        </div>
        <div>
          <input placeholder='Description' name="description" required className='main-fields'
          onChange={(e) => {setFormData(prevData => {
            return {
              ...prevData,
              description: e.target.value
            }
          })}}
          />
        </div>
        <div id='postbtn-container' type='submit'>
          <button>Post</button>
        </div>
      </form>
    </div>
  </div>
}