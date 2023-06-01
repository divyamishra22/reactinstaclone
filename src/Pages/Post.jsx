import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import api from '../api/index1';
import Profile from '../components/Profile';
// import TimeAgo from 'react-timeago';


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
    <div className='container'>
      <div className='containerPhoto'>
        <img src={post.image}/>
      </div>
      <div className='containerPost'>
        <div className='header'>
        <Profile username={user.username}/>
        <p style={{ margin: '5px 0' }}>{post.post}</p>
        </div>
        <div className='containerComments'>
        {comments.length > 0 ? (
              comments.map((comment) => (
                <div>
                  <Profile
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
        <div className='likes'>
      { post.likes? (<span>♥ {post.likes.length} Likes</span>):("No Likes yet") }
        </div>
      </div>
      
    </div>
  )
}

export default Post
