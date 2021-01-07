import { Component } from 'react'
import './App.css';
import Login from './components/Login'
import { autoLogin, logout } from './actions/actionCreators'
// import Navbar from './containers/Navbar'
// import LoadingContainer from './containers/LoadingContainer'
import newSearch from './containers/SearchPage'
import allEntries from './containers/AllEntries'
import selectedSong from './containers/SelectedSongPage'
import pastEntry from './containers/PastEntryPage'
import commentPage from './containers/CommentPage'
import MainPage from './containers/MainPage'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
  }
  render(){
  //   if (this.props.loading) {
  //     return (
  //         <div> 
  //             <h1> Loading </h1>
  //             <LoadingContainer/>
  //         </div>
  //     )
  // } else 
  return (
      <div className="container">
        {this.props.user.id
        ?
          <>
          <Switch>
           <Route exact path="/allentries" component={allEntries} />
            <Route exact path="/newSearch" component={newSearch} />
            <Route exact path="/pastentry" component={pastEntry} />
            <Route exact path="/selectedsong" component={selectedSong} />
            <Route exact path="/comments" component={commentPage} />
            <Route path="/main" component={MainPage}/>
            <Route path="/" component={MainPage}/>
          </Switch>
          <button onClick={this.props.logout}>Logout!</button>
          </>
         :
          <Login/>
        } 
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  user: state.user, 

})

export default connect(mapStateToProps, { autoLogin, logout })(App);