import { createContext,useContext,  useState } from 'react';


const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feed, setFeed] = useState([]);

  async function getfeed() {
    fetch(`/api/feed`, {
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
    fetch(`/api/posts/${postid}`, {
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
