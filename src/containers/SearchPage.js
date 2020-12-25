import { Component } from "react"
import { connect } from 'react-redux'
import { searchForSong } from '../actions/actionCreators'
import SongCard from '../components/SongCard'
import LoadingContainer from './LoadingContainer'
import Nav from '../components/Navbar'

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
    
    render(){
        const content = !this.props.allsongs || this.props.allsongs.status === 500 ? 'Please search for a different song or artist' : this.props.allsongs.map(song => <SongCard key={song.spotify_id} {...song} />);
        if (this.props.loading) {
            return (
                <div> 
                    <h1> Searching </h1>
                    <LoadingContainer/>
                </div>
            )
        } else 
        return (
            <div className="container">
                
                <Nav />
                <h1>Music Diary</h1>
            <form className="form-inline mt-2mt-md-0" onSubmit={this.handleSubmit}>
                <input className="form-control mr-sm-2 search" type="text" name="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} value={this.state.search}/>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="cards">
                    {content}
                </div>
            </div>
        )
    }
}

const msp = (state) => ({
    loading: state.loading,
    allsongs: state.search.results
  })

function mapDispatchToProps(dispatch){
    return { searchForSong: (search) => dispatch(searchForSong(search)) }
}

export default connect(msp, mapDispatchToProps)(SearchEntry)