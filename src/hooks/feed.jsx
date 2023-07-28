import { createContext,useContext,  useState } from 'react';


const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feed, setFeed] = useState([]);

  async function getfeed() {
    fetch(`https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com/feed`, {
      method: "get",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("jwt"),
        
      },
      })
    .then(res => res.json())
      .then(data => {
       console.log(data)
       setFeed(data);
       
  })
  }


  async function DeletePost(postid){
    fetch(`https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com/posts/${postid}`, {
          method: "delete",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)})
  }


  return (
    <FeedContext.Provider
      value={{
        getfeed,
        feed,
        DeletePost
      }}
    >
      {children}
    </FeedContext.Provider>
  );
}
export function useFeed() {
    const context = useContext(FeedContext);
    if (!context) {
      throw new Error('useFeed must be used within a FeedProvider  ');
    }
    return context;
  }
