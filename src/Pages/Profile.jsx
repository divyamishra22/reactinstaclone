import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [photos, setPhotos] = useState([]);
    const [isFollow, setIsFollow] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [count, setCount] = useState(null);
  

    useEffect(()=>{
    // const getProfile = () => {
        try{
            // setLoading(true);
            fetch(`http://localhost:3000/user/viewprofile/${username}`, {
            method: "get",
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          })
          .then((res) => res.json())
            .then((result) => {
              console.log(result);
            //    setUser(result);
            })
       

        }
           catch (NotFoundException) {
          console.log('User With Username does not Exist');
        } 
        // finally {
        // //   setLoading(false);
        // }
    
} , []);  

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Profile
