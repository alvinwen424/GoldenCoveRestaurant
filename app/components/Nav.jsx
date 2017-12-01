import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import history from '../history'
import fetchUser from '../queries/fetchUser.js'

class Nav extends Component {

  logout = () => {
    console.log('logout')
    //Uses the mutation.js logout field to invoke req.logout()
    this.props.mutate({
        refetchQueries: [{query: fetchUser}]
      })
    .then(() => history.push('/'))
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-dark">
        <div className="div-left">
          <Link to="/" className="navbar-brand"> Home </Link>
          <Link to="/menu" className="navbar-brand"> Menu </Link>
        </div>

        <div className="div-right">
          <Link to="/itemCreate" className="navbar-brand"> Create New Item </Link>
          { this.props.user ?
            <button onClick={this.logout} className="navbar-brand"> Logout </button> :
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
