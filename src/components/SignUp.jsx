import React,{ useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  // const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
   const [name, setName] = useState("");
   const [bio, setbio] = useState('');
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
    setbio('');

};

  
  const getMyPostData = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/signup",{
        password: password,
        email:email,
        username: username,
        name: name,
        bio: bio,
      })
     
      // setMyData(res.data);
      alert("sucessfully signed");
      console.log(res);
    } catch (error) {
      setIsError(error);
    }


  };
  return (
    <>
    <div className='form'  onSubmit={handleSubmit}>
    <form className='signup'>
    {/* <div className='form'> */}
     <p> Sign In to view like follow your friends</p> 
    <div className='form0'>
      <input type= "text" name="username" id="name" placeholder="Name"
       onChange={(e) => { setName(e.target.value) }}/>
    </div>
    <div className='form4'>
      <input type= "text" name="username" id="username" placeholder="Username"
       onChange={(e) => { setUsername(e.target.value) }}/>
    </div>
    <div className='form1'>
      <input type= "email" name=" email" id="email" value={email} placeholder="Email"
       onChange={(e) => { setemail(e.target.value) }}/>
    </div>
    <div className='form2'>
      <input type= "password" name=" password" id="password"   value={password} placeholder="Password" 
       onChange={(e) => { setpassword(e.target.value) }}/>
    </div>
    <div className='form5'>
      <input type= "text" name="username" id="bio" placeholder="Bio"
       onChange={(e) => { setbio(e.target.value) }}/>
    </div>
    <p>By Signing Up, You Agree to our Terms and Policy</p>
    <button type="submit" id="submit-btn"  >SignUp</button>
    {/* </div> */}
    
    </form>
    <div className='form3'>
    Aready have an Account?
    <Link to="/SignIn">
    <span> SignIn</span>
    </Link>
    </div>
    </div>
    </>
  )
}

export default SignUp
