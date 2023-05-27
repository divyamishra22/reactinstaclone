import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import {useAuth}  from '../hooks/auth'

const SignIn = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const {SignIn, } = useAuth();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Email or Password cannot be blank");
    }
    else {
        SignIn({email, password})
    }
    setemail('');
    setpassword('');
};

  return (
    <div className='signin'>
      <div>
        
        <div className='loginform'>
          <div>
          <input type="name" name="email" id="email" value={email} placeholder='Email'
           onChange={(e) => { setemail(e.target.value) }}/>
        </div>
        <div>
          <input type="password" name="password" id="password"   value={password} placeholder='Password'
           onChange={(e) => { setpassword(e.target.value) }}/>
        </div>
        <button type='submit' id="login-btn"  onClick={handleSubmit} >LogIn</button>
      </div>
      
      <div className="loginform2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
