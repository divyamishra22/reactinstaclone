import React, {useState, useEffect} from 'react'
import './Home.css'
import Profile from '../components/Profile';

const Main = ({ feed}) => {

  // const [data, setData] = useState([]);
  const [user, setUser] = useState(" ");

 
 

    
  


  return (
    <>
    <div className='card'>
       <Profile
          username={feed.posts.user.username}
          name={feed.posts.user.name}
        />
         <div className="card-image">
         <img src={feed.posts.image} alt="" />
       </div>
    </div>
 </>        
  )
}

export default Main
