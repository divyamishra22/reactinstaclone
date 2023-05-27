import { createContext, useContext, useCallback, useState } from 'react';


const AuthContext = createContext();

export function AuthProvider({ children }) {


  const [user, setUser] = useState(null);


  const SignIn = async () => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login",{
  
        password: password,
        email:email,
       
      })
     
      const { accessToken } = res.data;
      api.defaults.headers.authorization = `Bearer ${accessToken}`;
      const signeduser = await api.get('http://localhost:3000/user/auth/me');
        setUser(signeduser);
      
      console.log(res);
      if(res.data === "user does not exist"){
      alert(res.data);
      }
      else{
        alert("SignedIn Successfully")
         localStorage.setItem("jwt", res.data)
      }
    } catch (error) {
      setIsError(error);
    }
  }


    async function editUser() {
        fetch(`http://localhost:3000/user/${userid}`,
        {
            method: "patch",
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

//     async function getUser() {
//       fetch(`http://localhost:3000/user/auth/me`,
//       {
//           method: "get",
//           headers: {
//               "Authorization": "Bearer " + localStorage.getItem("jwt")   
//           }
//       })
//       .then(res => res.json())
//       .then(data => {
//        console.log(data)
//        setUserid(data.sub);
//   })
// }
    
return (
    <AuthContext.Provider
      value={{
        editUser,
        SignIn, 
        user
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