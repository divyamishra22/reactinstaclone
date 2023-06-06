import React, {useState, useEffect, useCallback} from 'react'
import './Home.css'
import Profile from '../components/Profile';
import Modal from './Modal'
import { FaHeart, FaComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiMoreHorizontal } from 'react-icons/fi';
import api from '../api/index1';
import CommentsList from './CommentsList';
import { Link } from 'react-router-dom'



const Main = ({ feed}) => {
 let liked = feed.isLiked;
  const [like, setLike] = useState(liked);
  const [modalOpen, setModalOpen] = useState(false);
  let postid = feed.posts.id;
  const [comment, setcomment] = useState('');
  const [comments, setcomments] = useState(feed.posts.comments);
  const [show, setShow] = useState(false);
 

  const togglelike = useCallback( 
    ()=>{
    fetch(`http://localhost:3000/like/${postid}`, {
          method: "put",
          headers: {
            // "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)
           setLike(!like);
        
          })
  },
  [like]
  )

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const res = await api.post(`http://localhost:3000/comments/${postid}`, { body: comment },
      {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("jwt")   
        }
      });
      if (res.status === 201) {
        setcomments((state) => [...state, res.data]);
        console.log('commented');
      }
      setcomment('');
   
    },
    [feed.posts.id, comment]
  );

  

  const toggleComment = () => {
   
      setShow(false);
   
  };


  return (
    <>
    <div className='card'>
      <div className='card-header'>
      <Profile 
          username={feed.posts.user.username}
          name={feed.posts.user.name}
        />    
        <FiMoreHorizontal size={20}  onClick={() => setModalOpen(true)}/>
       { modalOpen && <Modal isAuthor={feed.isAuthor} post={feed.posts} setModalOpen={setModalOpen}/>}     
      </div>   
        {/* { <Modal isAuthor={feed.isAuthor} post={feed.posts} />} */}
         <div className="card-image">
         <img src={feed.posts.image} alt="" />
         <div>
        {like? (<FaHeart onClick={togglelike}/>):
        ( <FiHeart onClick={togglelike} size={18}/>)
  }

        <Link to={`/post/${postid}`}>
          <FaComment size={18}  />
        </Link>
          
           <div className='card-details'>
              <p>
                {feed.posts.user.username}
              <span>{feed.posts.post}</span>
                 </p>
                 <Link to={`/post/${postid}`}
          style={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#999',
            marginTop: '10px',
            display: 'block',
          }}
        >
          More details..
        </Link>
                 </div>  

              <p
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => {
                  setShow(true);
                }}
              >
                <Link to={`/post/${postid}`}>
                View all comments
                </Link>
              </p>
              <CommentsList comments={comments} show={show}/>
         </div>
           <div>
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            placeholder="Add new Comment"
          />
          <button type="submit" >
            Publish
          </button>
        </form>

        </div>
       </div>
    </div>
 </>        
  )
}

export default Main
