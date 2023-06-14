import React, {useEffect, useState, useMemo} from 'react'
import { useAuth } from '../hooks/auth';
import './Edit.css';

const Edit = () => {
    const { user, editUser,} = useAuth();
    
     
      // const loadingMemo = useMemo(() => !(user && user.id), [user]);

      //   if (loadingMemo) {
      //     return <p>Loading..</p>;
      //   }   

        const [userData, setUserData] = useState({
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
          bio: user.bio,
          
        });
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const { name, username, bio, email, password } = userData;
        console.log(userData);
        editUser({ name, username, bio, email, password });
        
      };

      const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

  return (
    <div className='containerform'>
    <div className='formcontainer'>
    <form >
    <span>Edit your profile</span>
        <input type='text' name="username" placeholder="Username" value={userData.username} onChange={handleChange}/>
 
        <input type='text' name="name" placeholder="Name" value={userData.name} onChange={handleChange}/>
  
        <input name="password" type="password" placeholder="Password" value={userData.password}
         onChange={handleChange}/>
       
        <input name="email" placeholder="Email" type="email" value={userData.email}
                onChange={handleChange}/>
              
        <input name="bio" placeholder="Bio" value={userData.bio} onChange={handleChange}/>
     
         <p>To persist changes you must login again</p>
        
        <button type="submit"onClick={handleSubmit} >Update</button>
    </form>
    </div>
    </div>
  )
}

export default Edit
