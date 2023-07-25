import { createContext, useContext, useCallback, useState } from 'react';
// import api from '../api/index1';


const UploadContext = createContext();


export function UploadProvider({ children }) {
   
  const [profilepic , setprofilepic] = useState("");
 


  const updatepic = (url) => {
    // saving post to mongodb
    fetch("/api/user/avatar", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        avavtar: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setprofilepic(data.avatar);
         alert('login again to view update')
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  };


  const removeprofile = ()=>{
    
    fetch("/api/user/avatar", {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         alert(' succesfully deleted login in again to view');
        // window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  
    return (
    
      <UploadContext.Provider
        value={{ updatepic, profilepic , removeprofile }}
      >
        {children}
      </UploadContext.Provider>
    
    );
  }

  export function useUpload() {
    const context = useContext(UploadContext);
    if (!context) {
      throw new Error('useUpload must be used within a UploadProvider  ');
    }
    return context;
  }