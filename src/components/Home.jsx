import React, {useState, useEffect} from 'react'
import './Home.css'
const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    // if (!token) {
    //   navigate("./signup");
    // }
      // Fetching all posts
      fetch("http://localhost:3000/posts/alluserposts", {
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
  

  return (
    <div className='card'>
      {data.map((posts) => {
        return(
      <><div className='card-header'>
            <div className='card-pic'>
              <img src="./picture2.jpg" />
            </div>
            <h5>Raha</h5>
          </div><div className='card-image'>
              <img src={posts.image} />
            </div><div className='card-content'>
              <i className="fa-regular fa-heart"></i>
            </div>
    {/* <i class="fa-light fa-face-smile"></i> */}
    <div className='add-comment'>
    <input type='text' placeholder="Add Comment"/>
    <button className="submit">Post</button>
    </div></>
        )})}
    </div>
        
        
  )
}

export default Home
