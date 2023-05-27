import React, {useEffect, useState, useMemo} from 'react'
import { useAuth } from '../hooks/auth';


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
    <div className='edituser' >
        <div>
        <input type='text' name="username" placeholder="Username" value={userData.username} onChange={handleChange}/>
        </div>

        <div>
        <input type='text' name="name" placeholder="Name" value={userData.name} onChange={handleChange}/>
        </div>

       <div> 
        <input name="password" type="password" placeholder="Password" value={userData.password}
         onChange={handleChange}/>
        </div>
       
       <div>
        <input name="email" placeholder="Email" type="email" value={userData.email}
                onChange={handleChange}/>
                </div>
     <div> 
        <input name="bio" placeholder="Bio" value={userData.bio} onChange={handleChange}/>
     </div>

       <div> 
         <p>To persist changes you must login again</p>
         </div>
      
        <button type="submit"onClick={handleSubmit} >Update</button>
    </div>
  )
}

export default Edit
