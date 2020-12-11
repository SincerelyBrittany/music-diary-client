import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { songOfTheDay, handleSongFormChange } from '../actions/actionCreators'

const SelectedSong = (props) => {
const audioRef = useRef()
const {name, artist, image, preview, spotify_id, lyrics} = props.song
let history = useHistory();

const handleSubmit = (event) => {
    //Make fetch request to save props/song
    //save props in state
    //go to next page and save user id and song_id
    // console.log(this.props, "in song card")
    console.log(Date.now(), "this is the date")
    console.log(props.song.id, props.user, "in selected song card")
    // console.log(this, "this is this")
    let date = Date.now()
    debugger
    // props.songOfTheDay(props.song.id, props.user, date)
    // history.push("/allentries");
  }



  return(
     <div className="card">
            <h1>{name}</h1>
            <img src={image} alt={name}/><br/>
            <p> {artist} </p>
            <a href={lyrics}>Link to {name} Lyrics</a>
            <audio controls ref={audioRef}>
            <source src={preview} type='audio/mpeg' />
            </audio>
            <button data-tag={spotify_id}> Pick this song for the day </button>
            <form onSubmit={handleSubmit}>
                <label>
                Essay:
                <textarea value={props.song.description} name="description" onChange={props.handleSongFormChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
    </div>

  
  )
}

const msp = (state) => ({
    user: state.user.id,
    song: state.song.results
  })

function mapDispatchToProps(dispatch){
    return { songOfTheDay: (search) => dispatch(songOfTheDay(search)) }
}

export default connect(msp, {mapDispatchToProps, handleSongFormChange})(SelectedSong)
