import React, { useRef } from 'react';


const SongCard = (props) => {
  const audioRef = useRef()
  const {name, artist, image, preview, spotify_id, lyrics} = props
  return (
    <div className="card" onClick={props.onClick}>
      <img src={image} alt={name}/><br/>
      <p>{name}</p>
      <p> {artist} </p>
      <a href={lyrics}>Link to {name} Lyrics</a>
      <audio controls ref={audioRef}>
      <source src={preview} type='audio/mpeg' />
      </audio>
    </div>
  )
}

export default SongCard