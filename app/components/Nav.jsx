import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import history from '../history'
import fetchUser from '../queries/fetchUser.js'

import { Menu, Segment } from 'semantic-ui-react'
const { Item } = Menu

class Nav extends Component {
  toolbarRight(){
    const { user } = this.props.data;
    if (user){
      return ([
        <Item name={`Hello ${user.name}`} /> ,
        <Item href='/cart' name='cart' />,
        <Item href='/itemCreate' name='Item Create' />,
        <Item name='logout' onClick={this.logout} />
      ])
    } else {
      return ([
        <Item href='/cart' name='cart' />,
        <Item href='/login' name='login'/>,
        <Item href='/signup'name='signup'/>
      ])
    }
  }

  logout = () => {
    console.log('logout', this.props)
    //Uses the mutation.js logout field to invoke req.logout()
    this.props.mutate({
        refetchQueries: [{query: fetchUser}]
      })
    .then(() => history.push('/'))
  }

  render() {
    const { user } = this.props.data
    return (
      <Menu pointing secondary>
        <Item href='/' name='home'/>
        <Item href='/menu' name='menu'/>
        <Menu.Menu position='right'>
          { this.toolbarRight() }
        </Menu.Menu>
      </Menu>
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

// this makes sure the tha nevbar reflect the corect thing
export default graphql(mutation)(
                  graphql(fetchUser)(Nav)
                )
