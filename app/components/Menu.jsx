import React, { Component } from 'react';
import fetchMenu from '../queries/fetchMenu.js'
import { graphql } from 'react-apollo'

import CategoryCard from './CategoryCard'

class Menu extends Component {

  render() {
  if (this.props.data.loading){ return <div>loading</div>}
    const { menu, error } = this.props.data
    if ( error ) return <div>{ error.message }</div>
    return (
      <div>
        <div><h1>Menu</h1></div>
        <div className="row">
          {menu.map(({id, content, name}) => (<CategoryCard id={id} content={content} name={name} key={id}/>))}
        </div>
      </div>
    )
  }
}

export default graphql(fetchMenu)(Menu)

