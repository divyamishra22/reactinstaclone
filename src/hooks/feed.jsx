import { createContext,  useState } from 'react';


const FeedContext = createContext();

export function FeedProvider({ children }) {
  const [feed, setFeed] = useState([]);

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
  return (
    <FeedContext.Provider
      value={{
        getFeed,
        feed,
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
