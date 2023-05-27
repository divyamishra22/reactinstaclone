import React from 'react'
import { useAuth } from '../hooks/auth';

const Edit = () => {
    const { user,   editUser,  } = useAuth();
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
        editUser({ name, username, bio, email, password });
      };

      const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };

  return (
    <div className='edituser'>
        <div>
        <input name="username" placeholder="Username" value={userData.username} onChange={handleChange}/>
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
      
        <button type="submit" onSubmit={handleSubmit} >Update</button>
    </div>
  )
}

export default Edit
