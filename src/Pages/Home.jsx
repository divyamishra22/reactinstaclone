import React, { useEffect, useState , useMemo} from 'react'
import Profile from '../components/Profile';
import { useFollow } from '../hooks/follow';
import Main from '../components/Main'
import { useAuth } from '../hooks/auth';
import { useFeed } from '../hooks/feed';


const Home = () => {
  const {user} = useAuth();
  // const user = localStorage.getItem("user");
  const { getFollows ,follow , } = useFollow();
  const { feed, getfeed} = useFeed();
 

    useEffect(() => {
      getFollows();
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
