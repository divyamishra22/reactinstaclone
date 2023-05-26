import { createContext, useContext, useCallback, useState } from 'react';

const FollowContext = createContext();

export function FollowProvider({ children }) {
    const [follow, setFollow] = useState([]);
    // const [loading, setLoading] = useState(false);
  
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
  
    return (
      <FollowContext.Provider
        value={{ follow, getFollows,  }}
      >
        {children}
      </FollowContext.Provider>
    );
  }

  export function useFollow() {
    const context = useContext(FollowContext);
    if (!context) {
      throw new Error('useFollow must be used within a FollowProvider  ');
    }
    return context;
  }