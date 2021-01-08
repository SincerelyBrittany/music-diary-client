import React, {Component} from 'react'
import { connect } from 'react-redux'
import { viewComments, getAllEntries } from '../actions/actionCreators'
import LoadingContainer from './LoadingContainer'
import Modal from "../components/Modal";
import Nav from '../components/Navbar'

class AllEntries extends Component{

    constructor(props) {
            super(props);
            this.state = {
            show: false,
            entry: {}
            }
        }
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
        const result = this.props.entries.results.filter(entry => entry.id === parseInt(currentID))
        let description = result[0].description
        let user = result[0].user.username
        let date = result[0].update_date
        let data = {
            user,
            date,
            description
        }

        this.setState({
            show: !this.state.show,
            entry: data
          })

        //display modal with information!
    }

    onClose = e => {
        this.setState({
            show: !this.state.show,
          })
    };


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
                        <Modal show={this.state.show} entry={this.state.entry} close={this.onClose}>
                        <>
                                {/* <button
                                className="btn1"
                                onClick={e => {
                                    console.log(e)
                                    this.onClose(e);
                                }}
                            >
                                Close
                            </button> */}
                    </>
            
                    </Modal>
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
