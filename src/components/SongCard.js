import React from 'react'

const SongCard = (props) => {
  const {name, artist, image, preview, spotify_id, lyrics} = props
  return (
    <div className="card">
      <img src={image} alt={name}/><br/>
      <p>{name}</p>
      <p> {artist} </p>
      <a href={lyrics}>Link to {name} Lyrics</a>
    </div>
  )
}

export default SongCard