import React, {Component, useState, useEffect} from 'react'
import { connect } from 'react-redux'
// class OldEntry extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//          data: [],
//         };
//       }
     
//       componentDidMount() {
//         const api_url = "http://localhost:3000/api/v1/get_user_entries";
//           fetch(api_url, {
//             method: 'POST', 
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({user: props.user}),
//           })
//           .then(response => response.json())
//           .then(results => {
//             console.log(results)
//         })
//         }
      

//   render(){
//       return(
//         <div className="card">
        
//         </div>
//       )
//       }
//   }


const OldEntry = props => {
    const [songs, setSongs] = useState([])
    useEffect(() => {
      const api_url = "http://localhost:3000/api/v1/get_user_entries";
          fetch(api_url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({user: props.user}),
          })
          .then(response => response.json())
          .then(results => {
            console.log(results)
        })
      })
    return(

      <div>

      </div>
    )
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


