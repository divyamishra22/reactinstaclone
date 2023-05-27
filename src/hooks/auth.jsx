import { createContext, useContext,  useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState(null);
  const [isError, setIsError] = useState("");
  

  const SignIn = async ({ email, password }) => {
    try {
      const res = await api.post("http://localhost:3000/auth/login",{password: password, email:email,})
     
      const { accessToken } = res.data;
      api.defaults.headers.authorization = `Bearer ${accessToken}`;     //setting token value to api headers
      const signeduser = await api.get('http://localhost:3000/user/auth/me');
        setUserid(signeduser.sub);
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


  const getUserDetails = async (userid) => {
    try {
      const res = await api.put(`http://localhost:3000/user/${userid}`)
      setUser(res);
      console.log(res);
    } catch (error) {
      setIsError(error);
    }
  }
    
return (
    <AuthContext.Provider
      value={{
        editUser,
        SignIn, 
        user,
        userid,
        getUserDetails,
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