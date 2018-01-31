'use strict';

import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// Using Router over BrowserRouter to allow use of history
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes'
import history from './history'


import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

//Used to include cookies with Apollo
const networkInterface = createNetworkInterface({
  uri: '/graphql',
  opts: {
    //tells apollo client to send cookies along when making queries
    credentials: 'same-origin'
  }
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: ob => ob.id
})

render(
  <ApolloProvider client={client} >
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
)

