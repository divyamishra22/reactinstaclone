import { createContext, useContext, useCallback, useState } from 'react';

const FollowContext = createContext();

export function FollowProvider({ children }) {
    const [follows, setFollows] = useState([]);
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
        value={{ follows, getFollows,  }}
      >
        {children}
      </FollowContext.Provider>
    );
  }