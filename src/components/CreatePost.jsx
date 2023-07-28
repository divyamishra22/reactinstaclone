import React,{useState, useEffect,useCallback
  //  useMemo
  } from 'react'
  import { useAuth } from '../hooks/auth';
  import api from '../api/index1';
import './CreatePost.css'

const CreatePost = () => {

  const [body, setBody] = useState("");
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")

  const {user} = useAuth();

  useEffect(() => {

    // saving post to mongodb
    if (url ) {

      fetch("https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com/posts/upload", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
          body,
          image: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            // alert("Successfully Posted")
            setBody(" ")
            setImage()
            // navigate("/")
          }
        })
        .catch(err => console.log(err))
 
    }
    
  }, 
  [url])

  



  const postDetails = () => {

    console.log(body, image)
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "myinstagram")
    data.append("cloud_name", "divya123")
    fetch("https://api.cloudinary.com/v1_1/divya123/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
    console.log(url)

  }

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };


  return (
    <div className='sharepost'>
    <div className='createpost'>
      <div className='post-header'>
        <h4 style={{margin: "3px auto"}}> Create a New Post</h4>
        <button id='Share' onClick={postDetails} >Share</button>
      </div>
      <div className='main-div'>
      <img
          id="output"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
        />
        <input type='file' accept='image/*'
         onChange={(event) => {
          loadfile(event);
          setImage(event.target.files[0])
        }}
        />
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
          <div className="userphoto">
            <img
              src= {user.avatar}/>
          </div> 
          <h5>{user.name}</h5>
        </div>
         {/* <textarea  type="text" placeholder="Write a caption...." value={body}
        onChange={(e) => {
          setBody(e.target.value)}}></textarea> */}
        </div>
    </div>
    </div>
  )
}

export default CreatePost
