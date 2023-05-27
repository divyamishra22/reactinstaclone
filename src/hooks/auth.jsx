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
      api.defaults.headers.authorization = `Bearer ${accessToken}`;     //setting token value to api headers
      const loggeduser = await api.get('http://localhost:3000/user/auth/me');
        setUser(loggeduser);
      console.log(res);
      console.log(userid);
         localStorage.setItem("jwt", res.data)
    } catch (error) {
      setIsError(error);
    }
  }


    async function editUser({password, name, email,username,bio}) {
      const res = await api.post(`http://localhost:3000/user/update`,
      { password:password,
        name: name,
        email: email,
        username: username,
        bio: bio,})
        console.log(res);
            
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