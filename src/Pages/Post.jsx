import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import api from '../api/index1';

const Post = () => {
  const { postId } = useParams();
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
    }
    getPost();
  }, [postId]);

  return (
    <div>
      
    </div>
  )
}

export default Post
