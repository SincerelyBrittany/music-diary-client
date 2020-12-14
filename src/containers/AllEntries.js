import React, {Component} from 'react'
import { connect } from 'react-redux'
import { viewComments } from '../actions/actionCreators'

class AllEntries extends Component{

    constructor(props) {
        super(props);
        this.state = {
         data: [],
        };
      }
     
      componentDidMount() {
        const api_url = "http://localhost:3000/api/v1/entries";
        fetch(api_url)
          .then(response => response.json())
          .then(data => this.setState({ data }));
          // .then(data => console.log(data));
      }

      handleClick = (e) => {
          console.log("here")
          let id = e.target.dataset.id
          this.props.viewComments(id)
          this.props.history.push("/comments")

      }

      renderEntries(){
        console.log(this.state.data, "this is state")
        return this.state.data.map((card) => {
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
            return (
                <div>
                    <div className="cards">
                        {this.renderEntries()}
                    </div>
                </div>
            )
        }
    }

    function mapDispatchToProps(dispatch){
        return { viewComments: (id) => dispatch(viewComments(id)) }
    }
    
    export default connect(null, mapDispatchToProps)(AllEntries)
