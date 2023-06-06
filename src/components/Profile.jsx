import React from 'react';
import { Link } from 'react-router-dom'


const Profile = ({username,name,con}) => {

  return (
       <div className={con}>  
       {/* <div> */}
  <img src='https://raw.githubusercontent.com/OLucho/instagram-clone/master/frontend/src/assets/avatar.png'/>  
        <div>
        <Link to={`/profile/${username}`}>
        <div className='username'>
          {username}
          </div>
        </Link>
        <div className='name'>
          {name}
        </div>
      </div>

        
     
    </div>
    
  )
}

export default Profile
