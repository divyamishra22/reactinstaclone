import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Profile.css';
const Profile = ({img,username,name,}) => {

  const { username } = useParams();z
  


  return (
       <div className="profile">
      {/* Profile frame */}
      <div className="profile-frame">
        {/* profile-pic */}
        <div className="profile-pic">
        {img ? (
          <img src={`${img}`}/>
        ) : (
          <img src='picture1.jpg'/>
        )}
        </div>
        {/* profile-data */}
        <div className="profile-data">
        <div>
        <h1>{username}</h1>
        <h1>{name}</h1>
      </div>
          
          <button
              className="ViewProfileBtn"
              // onClick={() => {
              //   if (isFollow) {
              //     unfollowUser(user.id);
              //   } else {
              //     followUser(user.id);
              //   }
              // }}
            >
              {/* {isFollow ? "Unfollow" : "Follow"} */}
              ViewProfile
            </button>
        {/* <div className='profile-info' style={{display: 'flex', justifyContent: 'space-between'}}>
          <p>40posts</p>
          <p>40 followers</p>
          <p>40 following</p>
        </div> */}
        </div>
      </div>
      {/* <hr style={{ width: "90%", opacity: "0.8",margin: "25px auto",}}/> */}
      {/* gallery */}
      {/* <div  className='gallery'>
      <img src='picture1.jpg'/>
      <img src='picture1.jpg'/>
      <img src='picture1.jpg'/>
      <img src='picture1.jpg'/>
      <img src='picture1.jpg'/>
      <img src='picture1.jpg'/>
      </div> */}
    </div>
    
  )
}

export default Profile
