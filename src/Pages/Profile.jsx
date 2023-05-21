import React, { useEffect, useState } from 'react'
import {
    //  Link,
     useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [isFollow, setIsFollow] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [count, setCount] = useState(null);
  
   
    // const  getProfile = async () => {
     
    // await  fetch(`http://localhost:3000/user/viewprofile/${username}`, {
    //   method: "get",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("jwt"),
    //   },
    // })
    // .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //    setres(result);
    //    console.log(res) 
    //   })
      
  // }

    useEffect(()=>{
  // getProfile(); 
    fetch(`http://localhost:3000/user/viewprofile/${username}`, {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
    .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        console.log(user);
      })
     
} , [username]);  


            

  return (
    <div className='profile'>
        <div className='profile-frame'>
            <div className='profile-pic'>
            {/* <img src={user.Photo ? user.Photo : picLink} alt="" /> */}
            <img src="picture1.jpg"/>
            </div>
            <div className='profile-data'>
            {/* <h1>{user.name}</h1> */}
            {/* {isProfile ? (
            //   <Link to={`/edit/${username}`}>
                <button type='submit' id='editbtn'>Edit Profile</button>
            //   </Link>
            ) : isFollow ? (
              <button onClick={() => handleFollowButton(user.id)}></button>
            ) : (
              <button onClick={() => handleFollowButton(user.id)}></button>
                )} */}
            </div>
            <div className='profile-info'>
            {/* <p>{count.userPostsCount} posts</p>
            <p>{count.userFollowersCount} followers</p>
            <p>{count.userFollowsCount} following</p> */}
            </div>
        </div>
      
        <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}/>
         {/* <div className="gallery">
         {posts.length > 0 &&
            posts.map((photo) => (
            //   <Link key={photo.id} to={`/photo/${photo.id}`}>
                <Photo src={`data:image/png;base64, ${photo.key}`} />
            //   </Link>
            ))}
      </div> */}
    </div>
  )
}

export default Profile
