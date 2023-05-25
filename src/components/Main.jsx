import React, {useState, useEffect} from 'react'
import './Home.css'
import Profile from '../components/Profile';
// import { FaHeart} from 'react-icons/fa';
// import { FiHeart } from 'react-icons/fi';

const Main = ({ feed}) => {
 let liked = feed.isLiked;
  const [like, setLike] = useState(liked);

  const likepost = () =>{
    fetch(`http://localhost:3000/like/${postid}`, {
          method: "post",
          body: JSON.stringify({
            postid: feed.posts.id,
          }),

          headers: {
            // "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)})
  }



  const unlikepost = () =>{
    fetch(`http://localhost:3000/like/${postid}`, {
          method: "delete",
          body: JSON.stringify({
            postid: feed.posts.id,
          }),
          headers: {
            // "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)})
  }


  return (
    <>
    <div className='card'>
       <Profile
          username={feed.posts.user.username}
          name={feed.posts.user.name}
        />
         <div className="card-image">
         <img src={feed.posts.image} alt="" />
         <div>
        {like? (<i class="fa-solid fa-heart"></i>):
        (<i class="fa-regular fa-heart" size={18}></i>)
  }
         </div>
       </div>
    </div>
 </>        
  )
}

export default Main
