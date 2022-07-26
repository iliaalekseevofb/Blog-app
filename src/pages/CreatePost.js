import React from 'react'

const CreatePost = () => {
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create A Post</h1>
        <div className='inputGp'>
          <label>Title: </label>
          <input placeholder='Title...'/>
        </div>
        <div className='inputGp'>
          <label>Post: </label>
          <textarea placeholder="Post..." />
        </div>
      </div>
    </div>
  )
}

export default CreatePost