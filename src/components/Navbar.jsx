import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
const Navbar = () => {

const {user,signOut} = useAuth();
  return (
    <>
    <div className='navbar'>
     <ul className='nav-menu'>
      <Link to="SignUp">
      <li>SignUp</li>
      </Link>

      <Link to="SignIn">
      <li>SignIn</li>
      </Link>

      {/* <Link to="/profile/:username">
      <li>Profile</li>
      </Link> */}

      <Link to="/Home">
      <li>Home</li>
      </Link>

      <Link to="/CreatePost">
      <li>CreatePost</li>
      </Link>

      <Link to="/Search">
        <li>Search</li>
      </Link>

      <Link  to={`/profile/${user && user.username}`}>
        <li>Profile</li>
      </Link>

     
      {/* <FaSignOutAlt onClick={signOut}  /> */}
     
        <button onClick={signOut}>LogOut</button>
      


     </ul>
    </div>
    </>
  )
}

export default Navbar
