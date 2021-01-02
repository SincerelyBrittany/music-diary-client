import React, { useRef, Component  } from 'react';
import MainPage from './MainPage'
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import { songOfTheDay, handleSongFormChange } from '../actions/actionCreators'

const SelectedSong = (props) => {
const audioRef = useRef()
const {name, artist, image, preview, spotify_id, lyrics} = props.song
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


  if(!props.errors){
  return(
     <div className="card">
            <h1>{name}</h1>
            <img src={image} alt={name}/><br/>
            <p> {artist} </p>
            <a href={lyrics}>Link to {name} Lyrics</a>
            <audio controls ref={audioRef}>
            <source src={preview} type='audio/mpeg' />
            </audio>
            {/* <button data-tag={spotify_id}> Pick this song for the day </button> */}
            <form onSubmit={handleSubmit}>
                <label>
                Diary Entry:
                <textarea value={props.description} name="description" onChange={props.handleSongFormChange} />
                </label>
                <input type="submit" className="submit" value="Submit" />
            </form>
    </div>
  )}
  else {
    return(
    <div>
      <p> This is props</p>
      <p> {props.errors} </p>
      <MainPage />
    </div>
    )
  }
}

const msp = (state) => ({
    user: state.user.id,
    song: state.song.results,
    description: state.song.description,
    errors: state.errors.message
  })

function mapDispatchToProps(dispatch){
    return { 
        songOfTheDay: (search) => dispatch(songOfTheDay(search)),
        handleSongFormChange: (search) => dispatch(handleSongFormChange(search))
    }
}

export default connect(msp, mapDispatchToProps)(SelectedSong)





// class SelectedSong extends Component {
//     state = {
//         description: ""
//     }

//     handleChange = (event) => {
//         this.setState({[event.target.name]: event.target.value})
//     }
    
//    handleSubmit = (event) => {
//         event.preventDefault()
//        debugger
//         // this.props.history.push("/allentries")
//         //Make fetch request to save props/song
//         //save props in state
//         //go to next page and save user id and song_id
//         // console.log(this.props, "in song card")
//         console.log(Date.now(), "this is the date")
//         console.log(this.props.song.id, this.props.user, "in selected song card")
//         // console.log(this, "this is this")
//         let date = Date.now()
//         console.log(this.props.description, "this is description")
//         // props.songOfTheDay(props.song.id, props.user, date)
//         // history.push("/allentries");
//       }
    
//     render(){
//     // const audioRef = useRef()
//     const {name, artist, image, preview, spotify_id, lyrics} = this.props.song
//       return(
//          <div className="card">
//                 <h1>{name}</h1>
//                 <img src={image} alt={name}/><br/>
//                 <p> {artist} </p>
//                 <a href={lyrics}>Link to {name} Lyrics</a>
//                 {/* <audio controls ref={audioRef}>
//                 <source src={preview} type='audio/mpeg' />
//                 </audio> */}
//                 <button data-tag={spotify_id}> Pick this song for the day </button>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                     Essay:
//                     <textarea value={this.props.description} name="description" onChange={this.props.handleSongFormChange} />
//                     </label>
//                     <input type="submit" value="Submit" />
//                 </form>
//         </div>
    
      
//       )
//     }
// }
//     const msp = (state) => ({
//         user: state.user.id,
//         song: state.song.results,
//         description: state.song.description
//       })
    
//     function mapDispatchToProps(dispatch){
//         return { songOfTheDay: (search) => dispatch(songOfTheDay(search))  }
//     }
    
//     export default connect(msp, {mapDispatchToProps})(SelectedSong)
    