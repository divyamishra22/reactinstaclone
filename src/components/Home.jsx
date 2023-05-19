import React, {useState, useEffect} from 'react'
import './Home.css'
const Home = () => {

  const [data, setData] = useState([]);
  const [name, setname] = useState(" ");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    // if (!token) {
    //   navigate("./signup");
    // }
      // Fetching all posts
      fetch("http://localhost:3000/user/allusers", {
        method: "get",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setData(result);
        })
        .catch((err) => console.log(err));
    }, []);

    // const getuser = (userId) =>{
    //   if(userId)
    // {
    //   fetch(`http://localhost:3000/user/userid/${userId}`, {
    //     method: "get",
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("jwt"),
    //     },
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       console.log(result);
    //       setname(result.name);
    //       return name;
    //     })
    //     .catch((err) => console.log(err));
    //   }
    //   }
  


  return (
    <div className='card'>
      {data.map((posts) => {
        return(
      <><div className='card-header'>
            <div className='card-pic'>
              <img src="./picture2.jpg" />
            </div>
            <h5>{posts.name}</h5>
          </div>
          <div className='card-image'>
              {/* <img src="./picture1.jpg" /> */}
              <button className="submit">View Profile</button>
            </div>
            {/* <div className='card-content'>
              <i className="fa-regular fa-heart"></i>
            </div> */}
    {/* <i class="fa-light fa-face-smile"></i> */}
    {/* <div className='add-comment'>
    <input type='text' placeholder="Add Comment"/>
    <button className="submit">Post</button>
    </div> */}
    </>
        )})}
    </div>
        
        
  )
}

export default Home
