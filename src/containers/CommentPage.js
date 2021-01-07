import React, { useRef, Component  } from 'react';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import CommentCard from '../components/CommentsCard'
import { addComment } from '../actions/actionCreators'

const Comments = (props) => {
const audioRef = useRef()
let history = useHistory();

const handleSubmit = (event) => {
  event.preventDefault()

  const data ={
      user_id: props.user,
      entry_id: parseInt(props.entry_id.entry_id),
      content: event.target.comment.value
    }


    props.addComment(data)
    history.push("/comments");

}


  return(
     <div className="container">
       <div className="comment-cards">
          {!props.comments || props.comments.length === 0 ? 
            <p>Nothing Here </p>
            : props.comments && props.comments.map(comment => <CommentCard key={comment.id} {...comment} />) }
      </div>
       <form onSubmit={handleSubmit}>
                <label>
                Comment Here 
                <input type="text" name="comment" />
                </label>
                <input type="submit" className="submit" value="Submit" />
            </form>

        </div>
  )
}

const msp = (state) => ({
    user: state.user.id,
    comments: state.comments.results,
    entry_id: state.entry_id
  })

function mapDispatchToProps(dispatch){
    return { 
      addComment: (id) => dispatch(addComment(id)),
    }
}

export default connect(msp, mapDispatchToProps)(Comments)


