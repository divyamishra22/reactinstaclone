import { createContext, useContext,  useState } from 'react';
import api from '../api/index1';

const AuthContext = createContext();

export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);

  const [isError, setIsError] = useState("");
  

  const SignIn = async ({ email, password }) => {
    try {
      const res = await api.post("http://localhost:3000/auth/login",{password: password, email:email,})
     
      const { accessToken } = res.data;
      localStorage.setItem("jwt", res.data)
      api.defaults.headers.authorization = `Bearer ${accessToken}`;     //setting token value to api headers
       fetch(`http://localhost:3000/user/auth/me`,
      {
          method: "get",
          headers: {
              "Authorization": "Bearer " + localStorage.getItem("jwt")   
          }
      })
      .then(res => res.json())
      .then(data => {
       console.log(data)
      setUser(data);
      
  })
    } catch (error) {
      setIsError(error);
    }
  }


    async function editUser({password, name, email,username,bio}) {
      fetch(`http://localhost:3000/user/update`,
      {
          method: "post",
          body:JSON.stringify({
            password:password,
            name:name,
            email:email,
            username:username,
            bio:bio,

          }),
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
        SignIn, 
        user,
        isError
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