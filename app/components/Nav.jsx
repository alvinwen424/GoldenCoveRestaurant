import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>

        <Link to="/itemCreate"> Create New Item </Link>
        <Link to="/signup"> Sign Up </Link>
      </nav>
    )
  }
}

export default Nav
