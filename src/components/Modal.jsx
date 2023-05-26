import React from 'react'
import { useFollow } from '../hooks/follow';
import { FiMoreHorizontal } from 'react-icons/fi';

const Modal = ({isAuthor, post}) => {

  const { Unfollow } = useFollow();

  // let postid = post.id;


  async function UnfollowUser(){
    Unfollow(post.user.id);
  }

  async function DeletePost(){
    fetch(`http://localhost:3000/posts/${post.id}`, {
          method: "delete",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
          },
          })
        .then(res => res.json())
          .then(data => {
           console.log(data)})
  }


  return (
    <>
     <FiMoreHorizontal size={20} />
    <div>
       <div className="darkBg" >
      <div className="centered">
        <div className="modal">
          {isAuthor? (<div className="modalHeader">
          {/* <li>
              <Link to={`/photo/${post.id}`}>Go to Publication</Link>
            </li> */}
            <li className="red" 
            onClick={DeletePost}
            >
              Delete Publication
            </li>
            <li >Cancel</li>
          </div>):(
          <div className="modalHeader">
          {/* <li>
              <Link to={`/photo/${post.id}`}>Go to Publication</Link>
            </li> */}
            <li className="red" 
            onClick={UnfollowUser}
            >
            Unfollow
            </li>
            <li>Cancel</li>
          </div>)}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal
