import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-dark">
        <div className="div-left">
          <Link to="/" className="navbar-brand"> Home </Link>
          <Link to="/menu" className="navbar-brand"> Menu </Link>
        </div>

        <div className="div-right">
          <Link to="/itemCreate" className="navbar-brand"> Create New Item </Link>
          <Link to="/login" className="navbar-brand"> Login </Link>
          <Link to="/signup" className="navbar-brand"> Sign Up </Link>
        </div>
      </nav>
    )
  }
}

export default Nav
