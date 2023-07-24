import  { useCallback } from 'react'
import { createContext, useContext,  useState } from 'react';

const FollowContext = createContext();

export function FollowProvider({ children }) {
    const [follow, setFollow] = useState([]);
    // const [isFollow, setisfollow] = useState(false);


    async function getFollows() {
        fetch(`http://ec2-16-171-137-234.eu-north-1.compute.amazonaws.com:3000/follow`,
        {
            method: "get",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt"), 
                  
            }
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
        setFollow(data);
        
    })
}


async function handlefollow(userId){
  fetch(`http://ec2-16-171-137-234.eu-north-1.compute.amazonaws.com:3000/follow/${userId}`, {
        method: "put",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
          
        },
        })
      .then(res => res.json())
        .then(data => {
         console.log(data)
        })
}


const removeFollow = useCallback(async (id) => {
  setFollow((state) => state.filter((follow) => follow.id !== id));
}, []);


// async function followuser(userId){
//   fetch(`http://localhost:3000/follow/${userId}`, {
//         method: "post",
//         headers: {
//           "Authorization": "Bearer " + localStorage.getItem("jwt"),
          
//         },
//         })
//       .then(res => res.json())
//         .then(data => {
//          console.log(data)
//         setisfollow(true)})
// }

// async function Unfollow(userId){
//     fetch(`http://localhost:3000/follow/${userId}`, {
//           method: "put",
//           headers: {
//             "Authorization": "Bearer " + localStorage.getItem("jwt"),
            
//           },
//           })
//         .then(res => res.json())
//           .then(data => {
//            console.log(data)
//           //  setisfollow(false)
//           })
//   }
  
    return (
      <FollowContext.Provider
        value={{
          getFollows,
          //  Unfollow,
           follow ,
           removeFollow, 
          // followuser,
           handlefollow}}
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