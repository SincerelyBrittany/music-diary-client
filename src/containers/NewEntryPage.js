// import React from 'react'

// const SearchEntry = (props) => {
//   return(
//   <div className="cards">
//     <p> We are in Search </p>
//   </div>
//   )
// }


// export default SearchEntry

import { Component } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.
// import fetchSearchArticles from '../actions/fetchSearchArticles'
import { searchForSong } from '../actions/actionCreators'
import SongCard from '../components/SongCard'

class SearchEntry extends Component {

    state = {
        search: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchForSong(event.target.search.value)
    }

    handleClick = (event) => {
        console.log("here", event)
    }

    render(){
        return (
            <>
            <form className="form-inline mt-2mt-md-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.search}/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>

            <div className="cards">
            {this.props.allsongs.map(song => <SongCard key={song.spotify_id} {...song} onClick={this.handleClick} />)}
            </div>
            </>
        )
    }
}

const msp = (state) => ({
    allsongs: state.search.results
  })

function mapDispatchToProps(dispatch){
    return { searchForSong: (search) => dispatch(searchForSong(search)) }
}

export default connect(msp, mapDispatchToProps)(SearchEntry)