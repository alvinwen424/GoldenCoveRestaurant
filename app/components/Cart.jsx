import React, { Component } from 'react';
import fetchUser from '../queries/fetchUser.js'
import { graphql } from 'react-apollo'

class Cart extends Component {
  render() {
    const { user, loading } = this.props.data
    if (loading){ return (<h1>Loading</h1>) }
    else {
      return (
        <div className="home">
          {user && <h1>Hi {user.name} </h1>}

        </div>
      )
    }
  }
}

export default graphql(fetchUser)(Cart)
