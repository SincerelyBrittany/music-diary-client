import { Component } from 'react'
import './App.css';
import Login from './components/Login'
import { autoLogin, logout } from './actions/actionCreators'
// import Navbar from './containers/Navbar'
import newEntry from './containers/NewEntryPage'
import allEntries from './containers/AllEntries'
import pastEntry from './containers/PastEntryPage'
import MainPage from './containers/MainPage'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
  }
  render(){
    return (
      // <>
      //   <h1>Music Diary</h1>
      //   {this.props.user.id
      //   ?
          <>
          <Switch>
           <Route exact path="/allentries" component={allEntries} />
            <Route exact path="/newentry" component={newEntry} />
            <Route exact path="/pastentry" component={pastEntry} />
            <Route path="/main" component={MainPage}/>
            <Route path="/" component={MainPage}/>
          </Switch>
          <button onClick={this.props.logout}>Logout!</button>
          </>
      //    :
      //     <Login/>
      //   } 
      // </>
    );
  }
}


const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { autoLogin, logout })(App);