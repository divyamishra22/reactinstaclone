import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
import axios from 'axios'


const SignIn = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
   const [isError, setIsError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
        alert("Email or Password cannot be blank");
    }
    else {
        getMyPostData();
    }
    setemail('');
    setpassword('');
};
const getMyPostData = async () => {
  try {
    const res = await axios.post("http://localhost:3000/auth/login",{

      password: password,
      email:email,
     
    })
   
    
    
    console.log(res);
    if(res.data === "user does not exist"){
    alert(res.data);
    }
    else{
      alert("SignedIn Successfully")
    }
  } catch (error) {
    setIsError(error);
  }
}
  return (
    <div className='signin'>
      <div>
        
        <div className='loginform'>
          <div>
          <input type="email" name="email" id="email" value={email} placeholder='Email'
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
