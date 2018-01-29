import React, { Component } from 'react';
import fetchMenu from '../queries/fetchMenu.js'
import { graphql } from 'react-apollo'

import { Card } from 'semantic-ui-react'
import CategoryCard from './CategoryCard'
import StillLoading from './StillLoading'

const Menu = ({ data }) => {
  if (data.loading) return <StillLoading />
  const { menu, error } = data
  if ( error ) return <div> { error.message } </div>
  return (
    <div>
      <div><h1>Menu</h1></div>
      <Card.Group itemsPerRow={4}>
        {
          menu.map(category => (
            <CategoryCard {...category} key={category.id} />
          ))
        }
      </Card.Group>
    </div>
  )
}

export default graphql(fetchMenu)(Menu)

