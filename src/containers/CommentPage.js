import React, { useRef, Component  } from 'react';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import CommentCard from '../components/CommentsCard'
import { songOfTheDay, handleSongFormChange } from '../actions/actionCreators'

const Comments = (props) => {
const audioRef = useRef()
let history = useHistory();

// const handleSubmit = (event) => {
//     event.preventDefault()
//     // let date = Date.now()
//     const data ={
//         song_id: props.song.id,
//         user_id: props.user,
//         // date: date, 
//         description: event.target.description.value
//       }
//     props.songOfTheDay(data)
//     history.push("/pastentry");
//   }

// const {content} = props
const handleClick = (event) => {
  event.preventDefault()
  // let date = Date.now()
  const data ={
      user_id: props.user,
      entry_id: props.entry_id
    }

    console.log(props, "this is your data bitch")
  // props.songOfTheDay(data)
  // history.push("/pastentry");

}


  console.log(props.comments)

  return(
     <div className="container card">
       {props.comments.map(comment => <CommentCard key={comment.id} {...comment} />)}
       <button onClick={handleClick}> Add a comment </button>
    </div>

  
  )
}

const msp = (state) => ({
    user: state.user.id,
    comments: state.comments.results,
    // entry_id: state.comments[0]
  })

function mapDispatchToProps(dispatch){
    return { 

    }
}

export default connect(msp, mapDispatchToProps)(Comments)


