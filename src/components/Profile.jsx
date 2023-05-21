import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'


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
          <img src='picture2.jpg'/>
        {/* )} */}
        </div>
        {/* profile-data */}
        <div className="profile-data">
        <div>
        <Link to={`/profile/${username}`}>
        <h1>{username}</h1>
        </Link>
        <h1>{name}</h1>
      </div>

        </div>
      </div>
    </div>
    
  )
}

export default profile
