import { createContext,useContext,  useState } from 'react';


const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feed, setFeed] = useState([]);

  async function getfeed() {
    fetch(`http://ec2-16-171-137-234.eu-north-1.compute.amazonaws.com:3000/feed`, {
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
    fetch(`http://ec2-16-171-137-234.eu-north-1.compute.amazonaws.com:3000/posts/${postid}`, {
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
