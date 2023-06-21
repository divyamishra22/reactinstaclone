import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/auth'
import { FaSearch,  FaUser } from 'react-icons/fa';
import Searchbar from './Searchbar';



const Navbar = () => {


  const [modalOpen, setModalOpen] = useState(false);

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

      {/* <Link to="/Search"> */}
        <li onClick={() => setModalOpen(true)} style={{cursor: 'pointer'}}>
          <FaSearch color="#ccc" size={15} /> Search</li>
      {/* </Link> */}
      { modalOpen && <Searchbar setModalOpen={setModalOpen}/>}     

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
