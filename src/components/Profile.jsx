import React from 'react';
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = ({img, username,name,con}) => {

  
 


  return (
       <div className={con}>  
       
       {img?( <img src={img}/>):
  (<img src='https://raw.githubusercontent.com/OLucho/instagram-clone/master/frontend/src/assets/avatar.png'/> )}
        <div>
          <div className='names'>
        <Link to={`/profile/${username}`} >
        <div className='username'>
          {username}
          </div>
        </Link>
        <div className='name'>
          {name}
        </div>
        </div>
      </div>

        
     
    </div>
    
  )
}

export default Profile
