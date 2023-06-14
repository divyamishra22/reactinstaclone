import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { FaSearch,  FaUser } from 'react-icons/fa';



const Navbar = () => {



const {user,signOut} = useAuth();

  return (
    <>
    <div className='wrapper'>
    <div className='navbar'>
     <ul className='nav-menu'>
      {/* <Link to="SignUp">
      <li>SignUp</li>
      </Link>

      <Link to="SignIn">
      <li>SignIn</li>
      </Link> */}

     
      <Link to="/Home">
      <li>Home</li>
      </Link>

      <Link to="/CreatePost">
      <li>CreatePost</li>
      </Link>

      <Link to="/Search">
        <li><FaSearch color="#ccc" size={15} /> Search</li>
      </Link>

      <Link  to={`/profile/${user && user.username}`}>
        <li>  <FaUser color="#222" size={25} /> Profile</li>
       
      </Link>
        <button id='btn' onClick={signOut}>LogOut</button>
      


     </ul>
    </div>
    </div>
    </>
  )
    
}

export default Navbar
