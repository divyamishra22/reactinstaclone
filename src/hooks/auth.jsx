import { createContext, useContext,useCallback,  useState } from 'react';
import api from '../api/index1';
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export function AuthProvider({ children }) {

  const navigate = useNavigate();

  const [data, setData] = useState(() => {
   
    const user = localStorage.getItem("user");
    if ( user) {
      
      return { user: JSON.parse(user)};
    }
    return { user: null };

  });
 

  const [isError, setIsError] = useState("");
  

  const SignIn = async ({ email, password }) => {
    try {
      const res = await api.post("http://localhost:3000/auth/login",{password: password, email:email,})
      console.log(res.data);
      localStorage.setItem("jwt", res.data)
  const user = await api.get('/user/auth/me',{
    headers:{
      "Authorization": "Bearer " + localStorage.getItem("jwt")   
    }
  })
  console.log(user.data);
  localStorage.setItem('user', JSON.stringify(user.data));
  setData({
    user: user.data,
  });
    } catch (error) {
      setIsError(error);
    }
  }
 


    const editUser = async({password, name, email,username,bio})=> {
      
      console.log(name);
    const res = await api.post('/user/update', {
      password,
      name,
      email,
      username,
      bio,
    },
    {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("jwt")   
      }
    }
    );
    console.log(res.data);
 

}

function signOut() {
  localStorage.removeItem('jwt');
  localStorage.removeItem('user');
  setData({
    //  token: null,
     user: null });
     localStorage.clear();
     navigate("/SignIn");
}


    
return (
    <AuthContext.Provider
      value={{
        editUser,
        SignIn, 
        user: data.user,
        isError,
        signOut
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