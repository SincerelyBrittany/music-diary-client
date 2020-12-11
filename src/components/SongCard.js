import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { selectSong } from '../actions/actionCreators'

const SongCard = (props) => {
  let history = useHistory();
  const audioRef = useRef()
  const {name, artist, image, preview, spotify_id, lyrics} = props
  const handleClick = (event) => {
    //Make fetch request to save props/song
    //save props in state
    //go to next page and save user id and song_id
    // console.log(this.props, "in song card")
   
    console.log(props, "in song card")
    // console.log(this, "this is this")
    props.selectSong(props)
    history.push("/selectedsong");
    // this.props.history.push('/selectedsong')
  }

  return (
    <div className="card" >
      <img src={image} alt={name}/><br/>
      <p>{name}</p>
      <p> {artist} </p>
      <a href={lyrics}>Link to {name} Lyrics</a>
      <audio controls ref={audioRef}>
      <source src={preview} type='audio/mpeg' />
      </audio>
      <button onClick={handleClick} data-tag={spotify_id}> Pick this song for the day </button>
    </div>
  )
}


function mapDispatchToProps(dispatch){
  return { selectSong: (song) => dispatch(selectSong(song)) }
}

export default connect(null, mapDispatchToProps)(SongCard)

