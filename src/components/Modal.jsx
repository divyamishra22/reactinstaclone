import React, { useState, useCallback } from 'react'
import { useFollow } from '../hooks/follow';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import { useFeed } from '../hooks/feed';



const Modal = ({isAuthor, post,
   setModalOpen
  }) => {

    // const [isOpen, setisOpen] = useState(false);
  const { handlefollow , removeFollow} = useFollow();
  const {DeletePost} = useFeed();



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
     <FiMoreHorizontal size={20}  onClick={toggleModal}/>
    <div>
       <div className="darkBg" >
      <div className="centered">
        <div className="modal">
          {isAuthor? (<div className="modalHeader">
          <li>
              <Link to={`/post/${post.id}`}>Go to Publication</Link>
            </li>
            <li className="red" 
            onClick={()=>deletePost()}
            >
              Delete Publication
            </li>
            <li  onClick={toggleModal}>Cancel</li>
          </div>):(
          <div className="modalHeader">
          <li>
              <Link to={`/post/${post.id}`}>Go to Publication</Link>
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
    </div>
    </div>
    </>
  )
}

export default Modal
