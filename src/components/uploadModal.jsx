import React from 'react'

const uploadModal = () => {
  return (
    <div  className='profile-pic'>
        <div className='change-pic'>
        <h2>Change Profile Photo</h2>
        </div>
        <div>
        <button
            className="upload-btn"
            style={{ color: "#1EA1F7" }}
            
          >
            Upload Photo
          </button>
          <input
            type="file"
            // ref={hiddenFileInput}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
        <div>
        <button className="upload-btn" style={{ color: "#ED4956" }}>
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
  )
}

export default uploadModal
