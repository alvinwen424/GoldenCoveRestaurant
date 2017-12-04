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
import Cart from './Cart'

import { graphql } from 'react-apollo'
import fetchUser from '../queries/fetchUser.js'

class Routes extends Component {
  render () {
    const { user, loading } = this.props.data
    if (loading) return <h1> loading </h1>
    else {
    return (
        <div>
          <Nav user={user} />
          <div className="container">
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/itemCreate" component={ItemCreate} />
              <Route path="/SingleItem/:id" component={SingleItem} />
              <Route path="/menu" component={Menu} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      )
    }
  }
}


export default graphql(fetchUser)(Routes)
