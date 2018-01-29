import React, { Component } from 'react'
import {Route, Switch } from 'react-router-dom'
import { Home, NotFound, Nav, Menu, ItemCreate, SingleItem, SignUp, Login, Cart, SingleCategory, StillLoading} from './components'


import { graphql } from 'react-apollo'
import fetchUser from './queries/fetchUser.js'

class Routes extends Component {
  render () {
    const { user, loading } = this.props.data
    if (loading) return <StillLoading />
    else {
    return (
        <div>
          <Nav user={user} />
          <div className="container">
            <Switch>
              <Route path="/cart" component={Cart} />
              <Route path="/itemCreate" component={ItemCreate} />
              <Route path="/category/:id" component={SingleCategory} />
              <Route path="/item/:id" component={SingleItem} />
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
