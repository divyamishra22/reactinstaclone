import React, { useEffect, useState , useMemo} from 'react'
import Profile from '../components/Profile';
import { useFollow } from '../hooks/follow';
import Main from '../components/Main'
import { useAuth } from '../hooks/auth';
import { useFeed } from '../hooks/feed';
import './Home.css'



const Home = () => {
  const {user} = useAuth();
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
    <div className='container'>
      <div className='aside'>
    <div className='containerowner'>
     <Profile key={user.id}
     img={user.avatar}
     username={user.username}
     name={user.name}
     con= 'container1'/>
    </div>
    <div className='containerfollows'>
       {follow && 
            follow.map((follows) => (
        <Profile 
                img={follows.userTo.avatar}
                con= 'container1'
                key={follows.userTo.id}
                username={follows.userTo.username}
                name={follows.userTo.name}/>
            ) 
           
            )}
    </div>
    </div>
    
    <div className='containerfeeds'>
    {feed.length > 0 &&
              feed.map((feed) => <Main key={feed.posts.id} feed={feed} />)}
    </div>
    </div>
    </>
  )
}

export default Home
