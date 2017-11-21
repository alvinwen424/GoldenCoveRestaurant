import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <a href="/"> Home </a>
        <a href="/menu"> Menu </a>
        <Link to="/itemCreate"> Create New Item </Link>
        <Link to="/signup"> Sign Up </Link>
      </nav>
    )
  }
}

export default Nav
