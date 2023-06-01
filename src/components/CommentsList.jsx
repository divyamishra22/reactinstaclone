import React from 'react'
import {
    Link} from 'react-router-dom';

const CommentsList = ({comments, show}) => {
  return (
    <>
    <div>
         <div
                className="comment-section"
                style={{ borderBottom: "1px solid #00000029" }}
              >
                {show && comments.map((comment) => {
                  return (
                    <p className="comm">
                      <span
                        className="commenter"
                        style={{ fontWeight: "bolder" }}
                      >
                          <Link to={`/profile/${comment.user.username}`}>
                        {comment.user.username}{" "}
                        </Link>
                      </span>
                      <span className="commentText">{comment.body}</span>
                    </p>
                  );
                })}
             </div>

    </div>
    </>
  )
}

export default CommentsList
