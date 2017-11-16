import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import NotFound from './NotFound'
import Nav from './Nav'
import Menu from './Menu'

class Routes extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/menu" component={Menu} />
          <Route path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Routes;
