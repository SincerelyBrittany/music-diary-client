import React, { useRef, Component  } from 'react';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { songOfTheDay, handleSongFormChange } from '../actions/actionCreators'

const Comments = (props) => {
const audioRef = useRef()
let history = useHistory();

const handleSubmit = (event) => {
    event.preventDefault()
    // let date = Date.now()
    const data ={
        song_id: props.song.id,
        user_id: props.user,
        // date: date, 
        description: event.target.description.value
      }
    props.songOfTheDay(data)
    history.push("/pastentry");
  }

  console.log(props.comments)

  return(
     <div className="card">
       {props.comments.map(comment => <p> {comment.content}</p>)}
    </div>

  
  )
}

const msp = (state) => ({
    user: state.user.id,
    comments: state.comments.results

  })

function mapDispatchToProps(dispatch){
    return { 

    }
}

export default connect(msp, mapDispatchToProps)(Comments)


