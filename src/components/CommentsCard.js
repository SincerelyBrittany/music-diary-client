import React from 'react';
import { connect } from 'react-redux';


const CommentCard = (props) => {


  console.log(props.comments)


    const {content} = props


      console.log(props, "this is props")
  return (
    <div className="card" >
            <h1>User: {props.user.username}</h1>
            <h1>Commented: {content}</h1>
          
    </div>
  )
}


function mapDispatchToProps(dispatch){

}

export default connect(null, null)(CommentCard)
