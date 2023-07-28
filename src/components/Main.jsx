import React, {useState, useEffect, useCallback} from 'react'
import './Main.css'
import Profile from '../components/Profile';
import Modal from './Modal'
import { FaHeart, FaComment } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { FiMoreHorizontal } from 'react-icons/fi';
import api from '../api/index1';
import CommentsList from './CommentsList';
import { Link } from 'react-router-dom'
import Post from '../Pages/Post'


const Main = ({ feed}) => {
 let liked = feed.isLiked;
  const [like, setLike] = useState(liked);
  const [modalOpen, setModalOpen] = useState(false);
  let postid = feed.posts.id;
  const [comment, setcomment] = useState('');
  const [comments, setcomments] = useState(feed.posts.comments);
  const [show, setShow] = useState(false);
  const [modalopen, setModalopen] = useState(false);

 

  const togglelike = useCallback( 
    ()=>{
    fetch(`https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com/like/${postid}`, {
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
      const res = await api.post(`https://9p3apmrmqc.execute-api.eu-north-1.amazonaws.com/comments/${postid}`, { body: comment },
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
    <div className='card' style={{position: 'relative'}}>
   
    { modalopen && <Post setModalopen={setModalopen} postId={feed.posts.id}/>}

      <div className='card-header'>
      <Profile con='container2'
          img= {feed.posts.user.avatar}
          username={feed.posts.user.username}
          name={feed.posts.user.name}
        />    
        <FiMoreHorizontal size={20}  onClick={() => setModalOpen(true)}/>
       { modalOpen && <Modal isAuthor={feed.isAuthor} post={feed.posts} setModalOpen={setModalOpen}/>}     
      </div>   
         <div className="card-image">
         <img src={feed.posts.image} alt="" />
         <div className='content'>
          <div className='card-icons'>
        {like? (<FaHeart onClick={togglelike} size={18}  style={{cursor:'pointer',
         color: '#fc4850', marginRight: 10 }}/>):
        ( <FiHeart onClick={togglelike} size={18} style={{ cursor: 'pointer',marginRight: 10 }}/>)}

        {/* <Link to={`/post/${postid}`}> */}
          <FaComment size={18} style={{cursor:'pointer', color: 'black', }}
          onClick={() => setModalopen(true)}  />
        {/* </Link> */}
       
      
        </div>
          
           <div className='card-details'>
              <div>
                {feed.posts.user.username}
              {/* <span>{feed.posts.post}</span> */}
                 </div>
                 {/* <Link to={`/post/${postid}`}
          style={{
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#999',
            marginTop: '10px',
            display: 'block',
          }}
        > */}
          <span 
            style={{
              fontWeight: 'bold',
              textDecoration: 'none',
              color: '#999',
              marginTop: '10px',
              display: 'block',
              cursor: 'pointer'
            }} 
            onClick={() => setModalopen(true)} >More details..</span>
           
        {/* </Link> */}
                 </div>  

              <p
                style={{cursor: "pointer", textAlign:'left' }}
                onClick={() => {
                  setShow(true);
                }}
              >
                {/* <Link to={`/post/${postid}`}> */}
               <span   onClick={() => setModalopen(true)} 
               >View all comments</span> 
                {/* </Link> */}
              </p>
              {/* <CommentsList comments={comments} show={show}/> */}
         </div>
           <div className='card-comments'>
         <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setcomment(e.target.value)}
            placeholder="Add new Comment"
            style={{height: '60px',
              width: '100%',
              border: 'none',
              font: '400 13.333px Roboto',
              outline: '0px',
              color: '#262626',}}
          />
          <button type="submit" id='postbtn' >
            Post
          </button>
        </form>

        </div>
       </div>
         
    </div>
 </>        
  )
}

export default Main
