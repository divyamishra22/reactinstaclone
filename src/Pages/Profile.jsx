import React, { useEffect, useState , useMemo} from 'react'
import {
    //  Link,
     useParams } from 'react-router-dom';
    //  import api from '../api/index1';

const Profile = () => {
    const { username } = useParams();

    const [user, setUser] = useState(null);
    const [isFollow, setIsFollow] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [count, setCount] = useState(null);
    const [posts, setPosts] = useState([]);
  
   
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
        // const {
        //   isFollow: _isFollow,
        //   isProfile: _isProfile,
        //   userFollowersCount,
        //   userFollowingCount,
        //   userPostsCount,
        //   user: _user,
        // } = data;

       const _isFollow=  data.isFollow
       const  _isProfile =  data.isProfile
       const userFollowersCount=  data. userFollowersCount
       const userFollowingCount=  data.userFollowingCount
       const userPostsCount =  data.userPostsCount
       const  _user =  data.user
      
        setIsFollow(_isFollow);
        setCount({
          userFollowersCount,
          userFollowingCount,
          userPostsCount,
        });
        setIsProfile(_isProfile);
        setUser(_user);
        // setPhotos(_user.photos);
      })
      }
      getProfile();
    }, [username]);

    const loadingMemo = useMemo(() => !(user && user.id), [user]);

    if (loadingMemo) {
      return <p>Loading..</p>;
    }   
  
      
  const followUser = () => {
    fetch(`http://localhost:3000/follow/${user.id}`, {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        userid: user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(true);
      });
  };


  const unfollowUser = () => {
    fetch(`http://localhost:3000/follow/${user.id}`, {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        id: user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(false);
      });
  };


  useEffect(() => {
    fetch(`http://localhost:3000/user/${user.id}/allposts`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user);
        setPosts(result.post);
        // if (
        //   result.user.followers.includes(
        //     JSON.parse(localStorage.getItem("user"))._id
        //   )
        // ) {
        //   setIsFollow(true);
        // }
      });
  }, [isFollow]);

  return (
    <div className='profile'>
        <div className='profile-frame'>
            <div className='profile-pic'>
            {/* <img src={user.Photo ? user.Photo : picLink} alt="" /> */}
            {/* <img src="picture1.jpg"/> */}
            </div>
            <div className='profile-data'>
            <h1>{user.name}</h1>
            {isProfile ? (
            //   <Link to={`/edit/${username}`}>
                <button type='submit' id='editbtn'>Edit Profile</button>
            //   </Link>
            ) : isFollow ? (
              <button onClick={unfollowUser}>Unfollow</button>
            ) : (
              <button onClick={followUser}>Follow</button>
                )}
            </div>
            <div className='profile-info'>
            <p>{count.userPostsCount} posts</p>
            <p>{count.userFollowersCount} followers</p>
            <p>{count.userFollowingCount} following</p>
            </div>
        </div>
      
        <hr
        style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}/>
         <div className="gallery">
         {posts.length > 0 &&
            posts.map((photo) => (
            //   <Link key={photo.id} to={`/photo/${photo.id}`}>
                <Photo src={``} />
            //   </Link>
            ))}
      </div>
    </div>
  )
}

export default Profile
