import React, {useState, useEffect,  useRef} from 'react'
import './uploadModal.css'
import { useUpload } from '../hooks/upload';

const UploadModal = ({changeprofile}) => {
    const hiddenFileInput = useRef(null);
    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");
   
    const {updatepic, removeprofile} = useUpload();

 // posting image to cloudinary
 const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "myinstagram")
    data.append("cloud_name", "divya123")
    fetch("https://api.cloudinary.com/v1_1/divya123/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
    console.log(url);
  };

  
  const removephoto = () =>{
     removeprofile();
  }


  const postPic =()=>{
    updatepic(url);
    changeprofile();
  }

    const handleClick = () => {
        hiddenFileInput.current.click();
      };
    

      useEffect(() => {
        if (image) {
          postDetails();
        }
      }, [image]);

      useEffect(() => {
        if (url) {
          postPic();
        }
      }, [url]);

   

    
  return (
    <div  className='profilepic '>
      <div className='profileimage'>
        <div className='change-pic '>
        <h2>Change Profile Photo</h2>
        </div>
        <div style={{ borderTop: "1px solid #00000030" }}>
        <button
            className="upload-btn"
            style={{ color: "#1EA1F7" }}
            onClick={handleClick}
          >
            Upload Photo
          </button>
          <input
            type="file"
            ref={hiddenFileInput}
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => {
                setImage(e.target.files[0]);
              }}
          />
        </div>
        <div style={{ borderTop: "1px solid #00000030" }} >
        <button className="upload-btn" style={{ color: "#ED4956" }} onClick={removephoto}>
            {" "}
            Remove Current Photo
          </button>
        </div>
        <div style={{ borderTop: "1px solid #00000030" }}>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
            }}
            onClick={changeprofile}
          >
            cancel
          </button>
        </div>
        </div>
    </div>
  )
}

export default UploadModal
