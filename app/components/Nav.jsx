import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import history from '../history'
import fetchUser from '../queries/fetchUser.js'

class Nav extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { user, logout } = this.props

    return (
      <nav className="navbar navbar-default navbar-dark">
        <div className="div-left">
          <Link to="/" className="navbar-brand"> Home </Link>
          <Link to="/menu" className="navbar-brand"> Menu </Link>
        </div>

        <div className="div-right">
          <Link to="/itemCreate" className="navbar-brand"> Create New Item </Link>
          { user && user.name ?
            <button className="navbar-brand" onClick={logout}> Logout </button> :
            <Link to="/login" className="navbar-brand"> Login </Link>
          }
          <Link to="/signup" className="navbar-brand"> Sign Up </Link>
        </div>
      </nav>
    )
  }
}

const mutation = gql`
mutation {
  logout {
    email
  }
}
`


export default graphql(mutation)(Nav)
