import React, {Component, useState, useEffect} from 'react'
import { connect } from 'react-redux'
import PastSongCard from '../components/PastSongCard'
// const OldEntry = props => {
//     const [songs, setSongs] = useState([])
//     useEffect(() => {
//       const api_url = "http://localhost:3000/api/v1/get_user_entries";
//           fetch(api_url, {
//             method: 'POST', 
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({user: props.user}),
//           })
//           .then(response => response.json())
//         //   .then(results => {
//         //     console.log(results)
//         // })
//         .then(response => {
//           setSongs(response);
//       });

//       }, [songs])

//       console.log(songs, "this is songs")

//       const content = songs.length !== 0 ? songs.map(song=> (<li key={song.update_date}>{song.song.name}</li> )) : 'no song found'
//     return(

//       <div>
//         <ul>
//          {content}
//         </ul>
//       </div>
//     )
// }'

class OldEntry extends Component {
  // const [songs, setSongs] = useState([])
    constructor(props) {
      super(props);
  
      this.state = {
      //   data: null,
      data: [],
      };
    }
 
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
      //   .then(results => {
      //     console.log(results)
      // })
      // .then(response => {
      .then(data => this.setState({ data }));
        // setSongs(response);
    // });

    }

render(){
    console.log(this.state.data, " this is the data given back")
    const content = this.state.data.length !== 0 ? this.state.data.map(song=> (<PastSongCard key={song.spotify_id} {...song} /> )) : 'no song found'
  return(

    <div>
      <ul>
       {content}
      </ul>
    </div>
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


