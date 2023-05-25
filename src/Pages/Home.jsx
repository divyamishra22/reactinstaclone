import React, { useEffect, useState , useMemo} from 'react'
import Profile from '../components/Profile';
import Main from '../components/Main'

const Home = () => {
    
    // const [user,setUser] = useState('');
    const [follow, setFollow] = useState([]);
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
        setFollow(data);
        
    })
}
    
    getfeed();
     getfollows();
  }, []);


   
 const loadingMemo = useMemo(() => !(feed), [feed]);

    if (loadingMemo) {
      return <p>Loading..</p>;
    }   


  return (
    <>
    <div>
     {/* <Profile key={user.id}
     username={user.username}
     name={user.name}/> */}
    </div>
    <div>
       {follow && 
            follow.map((follows) => (
        <Profile 
                // img={user.avatar}
                key={follows.userTo.id}
                username={follows.userTo.username}
                name={follows.userTo.name}/>
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
