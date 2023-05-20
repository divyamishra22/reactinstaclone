import React from 'react';
import './Profile.css';



const profile = ({username,name,}) => {

  return (
       <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
        {/* {img ? (
          <img src={`${img}`}/>
        ) : ( */}
          <img src='picture1.jpg'/>
        {/* )} */}
        </div>
        {/* profile-data */}
        <div className="profile-data">
        <div>
        <h1>{username}</h1>
        <h1>{name}</h1>
      </div>

        </div>
      </div>
    </div>
    
  )
}

export default profile
