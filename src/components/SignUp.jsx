import React,{ useState } from 'react'
import './SignUp.css'
import { Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import logo from '../assets/logo.png';

const SignUp = () => {


  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
   const [name, setName] = useState("");
  //  const [bio, setbio] = useState('');
   const [isError, setIsError] = useState("");
  


   const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !username || !name) {
        alert("Cannot be blank");
    }
    else {
        getMyPostData();
    }
    setemail('');
    setpassword('');
    setUsername('');
    setName('');
    // setbio('');

};

  
  const getMyPostData = async () => {
    try {
      const res = await axios.post("http://ec2-16-171-137-234.eu-north-1.compute.amazonaws.com:3000/user/signup",{
        password: password,
        email:email,
        username: username,
        name: name,
        // bio: bio,
      })
     
      // setMyData(res.data);
     
      navigate("/SignIn")
      console.log(res);
    } catch (error) {
      setIsError(error);
    }


  };
  return (
    <>
    
    <div className='form0' >
      <div className='form1'>
    <form   onSubmit={handleSubmit}>
    <img src={logo} alt="logo" style={{width: '230px'}} />
    <span  >Register to upload images </span>
    
      <input type= "text" name="username" id="name" placeholder="Name"
       onChange={(e) => { setName(e.target.value) }}/>
    
    
      <input type= "text" name="username" id="username" placeholder="Username"
       onChange={(e) => { setUsername(e.target.value) }}/>
   
    
      <input type= "email" name=" email" id="email" value={email} placeholder="Email"
       onChange={(e) => { setemail(e.target.value) }}/>
   
   
      <input type= "password" name=" password" id="password"   value={password} placeholder="Password" 
       onChange={(e) => { setpassword(e.target.value) }}/>
   
   
      {/* <input type= "text" name="username" id="bio" placeholder="Bio"
       onChange={(e) => { setbio(e.target.value) }}/>
    */}
  
    <p>  By registering you accept our conditions, cookie policies and
            services</p>
    <button type="submit" id="submit-btn"  >SignUp</button>
   
    
    
    </form>
    <div className='form3'>
    <p>Aready have an Account?
    <Link to="/SignIn">
    SignIn
    </Link>
    </p>
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default SignUp
