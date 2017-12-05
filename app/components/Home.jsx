import React, { Component } from 'react';
import fetchUser from '../queries/fetchUser.js'
import { graphql } from 'react-apollo'

//Homepage should render lunch menu when from 11-5
//And render favorites any other times

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { loading } = this.props.data
    const user = this.props.user

    if (loading){ return (<h1>Loading</h1>) }
    else {
      return (
        <div className="home">
          {user && user.name ? <h1>Hi {user.name} </h1> : null}
          <h1>Welcome to Golden Cove Restaurant</h1>
        </div>
      )
    }
  }
}

export default graphql(fetchUser)(Home)
