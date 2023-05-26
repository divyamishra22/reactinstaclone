import React from 'react'
import { useFollow } from '../hooks/follow';
// import { FiMoreHorizontal } from 'react-icons/fi';

const Modal = ({isAuthor, post, setModalOpen}) => {

  const { Unfollow } = useFollow();


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

  const toggleModal = () => {
    setModalOpen(false);
  };


  return (
    <>
     {/* <FiMoreHorizontal size={20}  onClick={() => setModalOpen(true)}/> */}
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
            <li  onClick={toggleModal}>Cancel</li>
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
            <li  onClick={toggleModal}>Cancel</li>
          </div>)}
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal
