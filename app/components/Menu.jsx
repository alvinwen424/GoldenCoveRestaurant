import React, { Component } from 'react';
import fetchMenu from '../queries/fetchMenu.js'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

class Menu extends Component {

  render() {
  if (this.props.data.loading){ return <div>loading</div>}
    const { menu } = this.props.data
    return (
      <div>
        <div><h1>Menu</h1></div>
        <ul>
        {menu.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/SingleItem/${item.id}`}><h1>{item.name}</h1></Link>
              <h3>{item.content}</h3>
            </li>
          )
        })}
        </ul>
        <Link to="/itemCreate"> Create New Item </Link>
      </div>
    )
  }
}

export default graphql(fetchMenu)(Menu)

