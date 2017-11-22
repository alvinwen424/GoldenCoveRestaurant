import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Nav from './Nav'
import Menu from './Menu'
import ItemCreate from './ItemCreate'
import SingleItem from './SingleItem'
import SignUp from './SignUp'
import Login from './Login'

class Routes extends Component {
  render () {
    return (
      <div>
        <Nav />
        <div className="container">
          <Switch>
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

export default Routes
