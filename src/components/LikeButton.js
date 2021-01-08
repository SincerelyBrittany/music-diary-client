import React, {Component} from 'react'
import { connect } from 'react-redux';


class  LikeCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            like: 0,
        }
    }

    like = e => {
        console.log("this is like", e.target.dataset.id)
        this.setState({
            like: this.state.like + 1
        })
    }

render(){
  return (
        <button onClick={this.like}> Like {this.state.like}</button>
     )
  } 
}
export default connect(null, null)(LikeCard)