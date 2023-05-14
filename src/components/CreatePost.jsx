import React from 'react'
import './CreatePost.css'

const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };

const CreatePost = () => {
  return (
    <div className='createpost'>
      <div className='post-header'>
        <h4 style={{margin: "3px auto"}}> Create a New Post</h4>
        <button id='Share' >Share</button>
      </div>
      <div className='main-div'>
        <input type='file' accept='image/*'   onChange={(event) => {loadfile(event)}}/>
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
          <div className="card-pic">
            <img
              src="picture1.jpg"/>
          </div>
          <h5>Raha</h5>
        </div>
        <textarea  type="text" placeholder="Write a caption...."></textarea>
        </div>
    </div>
  )
}

export default CreatePost
