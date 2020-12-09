import { Component } from 'react'
import './App.css';
import Login from './components/Login'
import { autoLogin, logout } from './actions/actionCreators'
// import Navbar from './containers/Navbar'
// import Home from './components/Home'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount(){
    localStorage.token && this.props.autoLogin()
  }
  render() {
    return (
      <>
         <Login />
      </>
    );
  }
}


const mapStateToProps = (state) => ({user: state.user})

export default connect(mapStateToProps, { autoLogin, logout })(App);