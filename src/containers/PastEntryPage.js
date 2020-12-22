import React, {Component, useState, useEffect} from 'react'
import { connect } from 'react-redux'
import PastSongCard from '../components/PastSongCard'
import Nav from '../components/Navbar'

class OldEntry extends Component {
    constructor(props) {
      super(props);
      this.state = {
      data: [],
      };
    }
 
    //move state to redux store 
  componentDidMount() {
    const api_url = "http://localhost:3000/api/v1/get_user_entries";
        fetch(api_url, {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({user: this.props.user}),
        })
        .then(response => response.json())
      .then(data => this.setState({ data }));
    }

render(){
    console.log(this.state.data, " this is the data given back")
    const content = this.state.data.length !== 0 ? this.state.data.map(song=> (<PastSongCard key={song.spotify_id} {...song} /> )) : 'no song found'
  return(
    <>
       < Nav />
       <h1>Music Diary</h1>
        <div className="cards">
          {content}
        </div>
    </>
  )
}
}




const msp = (state) => ({
    user: state.user.id
  })

function mapDispatchToProps(dispatch){
    return { 
        // songOfTheDay: (search) => dispatch(songOfTheDay(search)),
        // handleSongFormChange: (search) => dispatch(handleSongFormChange(search))
    }
}

export default connect(msp, mapDispatchToProps)(OldEntry)


