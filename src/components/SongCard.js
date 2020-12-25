import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { selectSong } from '../actions/actionCreators'

const SongCard = (props) => {
    let history = useHistory();
    const audioRef = useRef()
    const {name, artist, image, preview, spotify_id, lyrics} = props
      const handleClick = (event) => {
        props.selectSong(props)
        history.push("/selectedsong");
      }

      const content = preview !== null ? {preview} : false;

      console.log(preview, content, "this is the preview")

  return (
    <div className="card" >
      <img src={image} alt={name}/><br/>
        <h1>{name}</h1>
        <h3> By: {artist} </h3>
        <a href={lyrics} className='new-line'>Link to {name} Lyrics</a>
      <br></br>
      <br />
      {content ? 
      <audio controls ref={audioRef} className='new-line'>
      <source src={preview} className='new-line' type='audio/mpeg' />
      </audio> : "no audio preview found"}
      <br />
      <br></br>
      <button className="card-btn" onClick={handleClick} data-tag={spotify_id}> Pick this song for the day </button>
    </div>
  )
}


function mapDispatchToProps(dispatch){
  return { selectSong: (song) => dispatch(selectSong(song)) }
}

export default connect(null, mapDispatchToProps)(SongCard)

