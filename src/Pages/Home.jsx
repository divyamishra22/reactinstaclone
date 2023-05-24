import React, { useEffect, useState , useMemo} from 'react'
import Profile from '../components/Profile';
import Main from '../components/Main'

const Home = () => {
    
    const [user,setUser] = useState('');
    const [follow, setFollow] = useState('');
    const [feed , setFeed]   = useState('');
    
    
    useEffect(() => {
    async function getfeed() {
      fetch(`http://localhost:3000/feed`, {
        method: "get",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        })
      .then(res => res.json())
        .then(data => {
         console.log(data)
         setFeed(data);
    })
    }
    async function getfollows() {
        fetch(`http://localhost:3000/follow`,
        {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")   
            }
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         setUser(data.user);
         setFollow(data.follow);
    })}
    getfollows();
    getfeed();
  }, []);


    const loadingMemo = useMemo(() => !(user && user.id), [user]);

    if (loadingMemo) {
      return <p>Loading..</p>;
    }   


  return (
    <>
    <div>
     <Profile key={user.id}
     username={user.username}
     name={user.name}/>
    </div>
    <div>
       {follow && 
            follow.map((follows) => (
        <Profile 
                // img={user.avatar}
                key={follows.userToId.id}
                username={follows.userToId.username}
                name={follows.userToId.name}/>
            ) 
           
            )}
    </div>
    <div>
    {feed.length > 0 &&
              feed.map((feed) => <Main key={feed.posts.id} feed={feed} />)}
    </div>
    </>
  )
}

export default Home
