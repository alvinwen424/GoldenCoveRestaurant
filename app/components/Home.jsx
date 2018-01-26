import React, { Component } from 'react';
import fetchUser from '../queries/fetchUser.js'
import { graphql } from 'react-apollo'
import StillLoading from './StillLoading'

//Homepage should render lunch menu when from 11-5
//And render favorites any other times

class Home extends Component {
  render() {
    const { user, loading } = this.props.data
    if (loading){ return (<StillLoading />) }
    else {
      return (
        <div className="home">
          {user && <h1>Hi {user.name} </h1>}
          <h1>Welcome to Golden Cove Restaurant</h1>
        </div>
      )
    }
  }
}

export default graphql(fetchUser)(Home)
