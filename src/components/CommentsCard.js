import React from 'react';
import { connect } from 'react-redux';


const CommentCard = (props) => {
    const {content} = props
  return (
    <div className="comment-card" >
            <h1>User: {props.user.username}</h1>
            <h1>Commented: {content}</h1>
          
    </div>
  )
}
export default connect(null, null)(CommentCard)
