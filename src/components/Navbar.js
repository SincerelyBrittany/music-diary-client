import React, {Component} from 'react'
import { NavLink } from 'react-router-dom';

export default class Nav extends Component{
    render(){
    return(
        <div className="navBar">
        <div className="navlink">
        <NavLink
          to="/"
          exact
          className="nav-li"
        > Home </NavLink>
          <NavLink
          to="/pastentry"
          exact
          className="nav-li"
        > Past Entries </NavLink>
         <NavLink
          className="nav-li"
          to="/allentries"
          exact
        > All Entries </NavLink>
        <NavLink
          className="nav-li"
          to="/newSearch"
          exact
        > Add new entry</NavLink>
        </div>
      </div>

     )
    }
}