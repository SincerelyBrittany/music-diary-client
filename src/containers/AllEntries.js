import React, {Component} from 'react'
import { connect } from 'react-redux'
import { viewComments, getAllEntries } from '../actions/actionCreators'
import LoadingContainer from './LoadingContainer'

class AllEntries extends Component{
      componentDidMount() {
          this.props.getAllEntries()
      }

      handleClick = (e) => {
          let id = e.target.dataset.id
          this.props.viewComments(id)
          this.props.history.push("/comments")
      }

      renderEntries(){
        return this.props.entries.results.map((card) => {
            return <div className="card">
                      <h3>Username: {card.user.username}</h3>
                      <h3>Date: {card.update_date}</h3>
                      <h3>Song: {card.song.name}</h3>
                      <h3>Artist: {card.song.artist}</h3>
                      <img src={card.song.image} alt="Image" />
                      <button data-id={card.id} onClick={this.handleClick}> View All Comments/ Comment on Diary Entry  </button>
                </div>
        })
    } 

      render(){
          console.log(this.props.entries.results, "this is props in entry")
        //   if (this.props.loading) {
        //     return (
        //         <LoadingContainer/>
        //     )
        // } else 
        return (
                <div>
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
