import React, { useEffect, useState , useMemo} from 'react'
import {
     Link,
     useParams } from 'react-router-dom';
import { useFollow } from '../hooks/follow';
    //  import api from '../api/index1';
  import UploadModal from '../components/uploadModal'; 
  import './Profile.css'
  import avatar from '../assets/avatar.png';


const Profile = () => {
    const { username } = useParams();
    const {handlefollow} = useFollow();
    const [user, setUser] = useState(null);
    const [isFollow, setIsFollow] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [count, setCount] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [changePic, setChangePic] = useState(false)

  



   
    useEffect(() => {
      async function getProfile() {
        // const res = await api.get(`http://localhost:3000/user/viewprofile/${username}`);
        // console.log(res.data);
        fetch(`http://localhost:3000/user/viewprofile/${username}`, {
          method: "get",
          headers: {
            // "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)
       const _isFollow=  data.isFollow
       const  _isProfile =  data.isProfile
       const userFollowersCount=  data. userFollowersCount
       const userFollowingCount=  data.userFollowingCount
       const userPostsCount =  data.userPostsCount
       const _userPosts = data.userPosts;
       const  _user =  data.user
      
        setIsFollow(_isFollow);
        setCount({
          userFollowersCount,
          userFollowingCount,
          userPostsCount,
        });
        setIsProfile(_isProfile);
        setUser(_user);
        setPosts(_userPosts);
      })
      }
      getProfile();
    }, [username]);

    const loadingMemo = useMemo(() => !(user && user.id), [user]);

    if (loadingMemo) {
      return <p>Loading..</p>;
    }   
  
  const follow = () => {
    try
    {  setLoading(true)
      handlefollow(user.id);
   setIsFollow(!isFollow);}
   finally{
    setLoading(false)
   }
  };


  const changeprofile = () => {
    if(isProfile)
   { if (changePic) {
      setChangePic(false)
    } else {
      setChangePic(true)
    }}
  }



  return (
    <div className='profile'>
        <div className='profile-frame'>
            <div className='profile-pic'>
           {user.avatar  ? (<img src={user.avatar} onClick={changeprofile}/>):
           ( <img src={avatar} 
             onClick={changeprofile}/>)}
              {
        changePic && 
        <UploadModal changeprofile={changeprofile} />
      }
            </div>
            <div>
            <div className='profile-data'>
            <h1>{user.name}</h1>
            {/* <p>{user.bio}</p> */}
            {isProfile ? (
             <Link to={`/edit/${username}`}>
             <button type='submit' id='editbtn'>Edit Profile</button> 
           </Link> 
          
            ) : isFollow ? (
              <button className='follow' onClick={follow}>{loading?'loading..': 'Following'}</button>
            ) : (
              <button className='follow' onClick={follow}>{loading? 'loading..': 'Follow'}</button>
                )}
            </div>
            <div className='profile-info'>
            <p>{count.userPostsCount} posts</p>
            <p>{count.userFollowersCount} followers</p>
            <p>{count.userFollowingCount} following</p>
            </div>
            </div>
            <div className='Description'>
            <p>{user.name}</p>
            <span>{user.bio}</span>
          </div>
        </div>
      
      {isProfile || isFollow? (
        <>
     <hr
        style={{
          width: "100%",

          opacity: "0.8",
          margin: "25px auto",
        }}/> 
         <div className="gallery">
         {posts.length > 0 &&
            posts.map((photo) => (
              <Link to={`/post/${photo.id}`}>
                <img  className='photos' src={photo.image} />
              </Link>
            ))}
      </div>
      </>): (" ")}
      {/* {
        changePic &&
        <UploadModal changeprofile={changeprofile} />
      } */}
    </div>
    
    
  )
}

export default Profile
