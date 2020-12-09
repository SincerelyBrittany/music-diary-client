import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";


const SongCards = (props) => {

  return(
  <div className="cards">
    <Link to="/newentry" ><div className="btn nav-link">Add new Entry </div></Link>
    <Link to="/pastentry" ><div className="btn nav-link">Old Entry </div></Link>
    <Link to="/allentries" ><div className="btn nav-link">All Entires </div></Link>



    





  </div>
  )
}

const msp = (state) => ({
  songs: state.songs.songs
})

export default connect(msp)(SongCards)