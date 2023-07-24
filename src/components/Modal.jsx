import React, { useState, useCallback } from 'react'
import { useFollow } from '../hooks/follow';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useFeed } from '../hooks/feed';
import './Modal.css'
import Post from '../Pages/Post'


const Modal = ({isAuthor, post,
   setModalOpen
  }) => {

    // const [isOpen, setisOpen] = useState(false);
  const { handlefollow , removeFollow} = useFollow();
  const {DeletePost} = useFeed();
  const [modalopen, setModalopen] = useState(false);


  const toggleModal = useCallback(() => {
    setModalOpen(false);
  },
  // [isOpen]
  );



const   UnfollowUser = useCallback(()=>{
    handlefollow(post.user.id);
    removeFollow(post.user.id)
   toggleModal()
   
   
  },
  [handlefollow, removeFollow, 
    toggleModal
  ]
  )

 const deletePost = useCallback(()=>{
   DeletePost(post.id)
   toggleModal()
   
 },
 [toggleModal]
 )


  return (
    <>
     {/* <FiMoreHorizontal size={20}  onClick={toggleModal}/> */}
    
       
        <div className='centered'>
        <div className="modal">
          {isAuthor? (<div className="modalHeader">
          <li  onClick={() => setModalopen(true)} >
              {/* <Link to={`/post/${post.id}`}> */}
                Go to Publication
                {/* </Link> */}
                { modalopen && <Post setModalopen={setModalopen} postId={post.id}/>}
            </li>
            <li className="red" 
            onClick={()=>deletePost()}
            >
              Delete Publication
            </li>
            <li  onClick={toggleModal}>Cancel</li>
          </div>):(
          <div className="modalHeader">
          <li  onClick={() => setModalopen(true)}>
             Go to Publication
             { modalopen && <Post setModalopen={setModalopen} postId={post.id}/>}
            </li>
            <li className="red" 
            onClick={()=>UnfollowUser()}
            >
            Unfollow
            </li>
            <li  onClick={toggleModal}>Cancel</li>
          </div>)}
    </div>
    </div>
   
    </>
  )
}

export default Modal
