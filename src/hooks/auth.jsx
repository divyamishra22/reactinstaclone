import { createContext, useContext, useCallback, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {
    async function editUser() {
        fetch(`http://localhost:3000/user/${userid}`,
        {
            method: "get",
            body:
            ({username,
             password,
             name,
             email,
              bio ,}),
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")   
            }
        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
    })
}
return (
    <AuthContext.Provider
      value={{
        editUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('use Auth must be used within a AuthProvider  ');
  }
  return context;
}