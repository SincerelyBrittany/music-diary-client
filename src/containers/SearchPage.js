import { Component } from "react"
import { connect } from 'react-redux'
import { searchForSong, selectSong } from '../actions/actionCreators'
import SongCard from '../components/SongCard'

class SearchEntry extends Component {

    state = {
        allsongs: ""
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.searchForSong(event.target.search.value)
    }

    // handleClick = (event) => {
    //     console.log("here", event)
    //     let spotify_id = event.target.dataset.tag
    //     // let user = current_user 
    //     let date = Date.now()
    //     debugger
    //     // this.props.selectSong(spotify_id)
    // }

    render(){
        // console.log(this.props, "in the entry page")
        // this.props.history.push('/allentries')
        return (
            <div>
            <form className="form-inline mt-2mt-md-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2" type="text" name="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.search}/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>

            <div className="cards">
                {this.props.allsongs.map(song => <SongCard key={song.spotify_id} {...song} />)}
            </div>
            </div>
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