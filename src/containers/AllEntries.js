import React, {Component} from 'react'
import { connect } from 'react-redux'
import { viewComments, getAllEntries } from '../actions/actionCreators'
import LoadingContainer from './LoadingContainer'
import Nav from '../components/Navbar'

class AllEntries extends Component{
      componentDidMount() {
          this.props.getAllEntries()
      }

      handleCommentClick = (e) => {
          let id = e.target.dataset.id
          this.props.viewComments(id)
          this.props.history.push("/comments")
      }

      handleEntryClick = (e) => {
        let currentID = e.target.dataset.id
        console.log(this.props, "you are in entries looking at the id")
        const result = this.props.entries.results.filter(entry => entry.id == currentID )
        console.log(result[0])
        debugger
        let description = result[0].description
        let user = result[0].user.username
        let date = result[0].update_date
    }

      renderEntries(){
        return this.props.entries.results.map((card) => {
            return <div className="card">
                      <h3>Username: {card.user.username}</h3>
                      <h3>Date: {card.update_date}</h3>
                      <h3>Song: {card.song.name}</h3>
                      <h3>Artist: {card.song.artist}</h3>
                      <img src={card.song.image} alt="Image" />
                      <button data-id={card.id} onClick={this.handleCommentClick}> View All Comments/ Comment on Diary Entry  </button>
                      <button data-id={card.id} onClick={this.handleEntryClick}> View Entry  </button>
                </div>
        })
    } 

      render(){
        //   if (this.props.loading) {
        //     return (
        //         <LoadingContainer/>
        //     )
        // } else 
        return (
                <div>
                     <Nav />
                     <h1>Music Diary</h1>
                    <div className="cards">
                        {this.renderEntries()}
                    </div>
                </div>
            )
        }
    }


const msp = (state) => ({
    entries: state.entries
  })


    function mapDispatchToProps(dispatch){
        return { 
            viewComments: (id) => dispatch(viewComments(id)),
            getAllEntries: () => dispatch(getAllEntries())
        }
    }
    
    export default connect(msp, mapDispatchToProps)(AllEntries)
