import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Nav from './Nav'
import Menu from './Menu'
import ItemCreate from './ItemCreate'
import SingleItem from './SingleItem'
import SignUp from './SignUp'
import Login from './Login'

import history from '../history'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import fetchUser from '../queries/fetchUser.js'

class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: this.props.data.user
    }
  }

  login = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    this.props.mutate({
      variables: {
        email,
        password
      }
    })
    .then((foundUser) => {
      this.setState({
        user: foundUser.data.login
      })
    })
    .then(() => history.push('/'))
  }

  logout = (event) => {
    event.preventDefault()
    //Uses the mutation.js logout field to invoke req.logout()
    this.props.mutate({
      refetchQueries: [{query: fetchUser}]
    })
    .then(() => {
      this.setState({
        user: ''
      })
      history.push('/')
    })
  }

  render () {
    const { user, loading } = this.props.data

    if (loading) return <h1> loading </h1>
    else {
    return (
        <div>
          <Nav user={this.state.user} logout={this.logout} />
          <div className="container">
            <Switch>
              <Route path="/itemCreate" component={ItemCreate} />
              <Route path="/SingleItem/:id" component={SingleItem} />
              <Route path="/menu" component={Menu} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" render={() => <Login login={this.login} />} />
              <Route path="/" render={() => <Home user={this.state.user} />} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      )
    }
  }
}

const loginMutation = gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password){
    email
    name
  }
}
`

const logoutMutation = gql`
mutation {
  logout {
    email
  }
}
`

export default graphql(logoutMutation)(graphql(loginMutation)(graphql(fetchUser)(Routes)))
