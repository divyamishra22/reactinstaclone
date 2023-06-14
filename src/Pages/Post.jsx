import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import api from '../api/index1';
import Profile from '../components/Profile';
import { FaHeart, } from 'react-icons/fa';
// import TimeAgo from 'react-timeago';
import './Post.css'

const Post = () => {
  const { postId } = useParams();
  const [post , setPost] = useState('')
  const [comments, setcomments] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    async function getPost() {
      const res = await api.get(`http://localhost:3000/posts/${postId}`,
      {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("jwt")   
        }
      }
      );
      console.log(res);
      setPost(res.data.post);
      setcomments(res.data.post.comments)
      setUser(res.data.post.user)
    }
    getPost();
  }, [postId]);

  return (
    <div className='containerposts'>
      <div className='containerPhoto'>
        <img src={post.image}/>
      </div>
      <div className='containerPost'>
        <div className='header'>
        <Profile username={user.username} con='container3'/>
        {/* <p style={{ margin: '5px 0' }}>{post.post}</p> */}
        </div>
        <div className='containerComments'>
        {comments.length > 0 ? (
              comments.map((comment) => (
                <div className='comment'>
                  <Profile con='container3'
                    username={comment.user.username}
                  />
                  <p>{comment.body}</p>
                  {/* <TimeStyle> */}
                    {/* <TimeAgo
                      date={`${comment.createdAt}`}
                      formatter={formatter}
                    /> */}
                  {/* </TimeStyle> */}
                </div>
              ))
            ) : (
              <p>No comments </p>
            )}
        </div>
        <div className='likes' style={{textAlign: 'left',}}>
      { post.likes? (<span><FaHeart style={{color: 'red'}}/>  {post.likes.length} Likes</span>):("No Likes yet") }
        </div>
      </div>
      
    </div>
  )
}

export default Post
