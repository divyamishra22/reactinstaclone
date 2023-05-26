import React from 'react'

const Modal = ({isAuthor, post}) => {
  return (
    <>
    <div>
       <div className="darkBg" >
      <div className="centered">
        <div className="modal">
          {isAuthor? (<div className="modalHeader">
          {/* <li>
              <Link to={`/photo/${post.id}`}>Go to Publication</Link>
            </li> */}
            <li className="red" 
            // onClick={() => handleDelete(photo)}
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
            // onClick={() => handleDelete(photo)}
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
