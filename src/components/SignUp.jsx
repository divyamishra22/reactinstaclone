import React,{ useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  // const navigate = useNavigate()
  // const [name, setName] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
   const [myData, setMyData] = useState([]);
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

  
  const getMyPostData =  () => {
    // try {
    //   const res = await axios.post("http://localhost:3000/user/signup",{
    //     // email:email,
    //     password: password,
    //     email:email,
       
    //   })
    //   // const res = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
    //   // setMyData(res.data);
    //   alert("sucessfully signed");
    //   console.log(res);
    // } catch (error) {
    //   setIsError(error);
    // }

    fetch("http://localhost:3000/user/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password

      })
    }).then(res => res.json())
       .then(data => {
      // //   if (data.error) {
      // //     notifyA(data.error)
      // //   } else {
      // //     notifyB(data.message)
      // //     navigate("/signin")
      // //   }
         console.log(data)
       })
  };
  return (
    <>
    <div className='form'  onSubmit={handleSubmit}>
    <form className='signup'>
    {/* <div className='form'> */}
     <p> Sign In to view like follow your friends</p> 
    {/* <div className='form0'>
      <input type= "text" name="username" id="username" placeholder="Name"/>
    </div> */}
    <div className='form1'>
      <input type= "email" name=" email" id="email" value={email} placeholder="Email"
       onChange={(e) => { setemail(e.target.value) }}/>
    </div>
    <div className='form2'>
      <input type= "password" name=" password" id="password"   value={password} placeholder="Password" 
       onChange={(e) => { setpassword(e.target.value) }}/>
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
