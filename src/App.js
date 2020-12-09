import { Component } from 'react'
import './App.css';
import Login from './components/Login'
// import Navbar from './containers/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class App extends Component {

  loggedIn = () => {
    if (localStorage.token || sessionStorage.token) {
      return true
    } 
    return true
  }

  render() {
    return (
      <>
      <h1> login </h1>
         <Login />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    search: state.search,
  }
}

export default connect(mapStateToProps)(App);
