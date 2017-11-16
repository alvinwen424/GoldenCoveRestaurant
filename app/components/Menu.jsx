import React, { Component } from 'react';
import fetchMenu from '../queries/fetchMenu.js'
import { graphql } from 'react-apollo'

class Menu extends Component {

  render() {
  if (this.props.data.loading){ return <div>loading</div>}
    const { menu } = this.props.data
    return (
      <div>
        <div>Menu</div>
        <ul>
        {menu.map(item => {
          return (
            <li key={item.id}>
              <h1>{item.name}</h1>
              <h3>{item.content}</h3>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default graphql(fetchMenu)(Menu)


