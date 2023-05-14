import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-pic'>
      <img src="./picture1.jpg"/>
      </div>
    <h5>Raha</h5>
    </div>
    <div className='card-image'>
      <img  src="./picture2.jpg"/>
    </div>
    <div className='card-content'>
    <i class="fa-regular fa-heart"></i>
    </div>
    {/* <i class="fa-light fa-face-smile"></i> */}
    <div className='add-comment'>
    <input type='text' placeholder="Add Comment"/>
    <button className="submit">Post</button>
    </div>
    </div>
    
   
  )
}

export default Home
