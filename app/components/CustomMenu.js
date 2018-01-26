import React, { Component } from 'react'
import fetchCategory from '../queries/fetchCategory.js'
import { graphql } from 'react-apollo'
import { Card } from 'semantic-ui-react'
import StillLoading from './StillLoading'
import ItemCard from './ItemCard'

class CustomMenu extends Component {
  constructor(props){
    super(props)
  }

  render(){
    if (this.props.data.loading) return <StillLoading />
    const { category, error } = this.props.data
    const { lunchTime } = this.props
    if ( error ) return <div>{ error.message }</div>
    return (
      <div className="container">
        <div>
          <h1>{ category.name}</h1>
          <h2>It is {!lunchTime && "not"} lunch time </h2>
        </div>
        <Card.Group itemsPerRow={3}>
        {
          category.items.map(item => (
            <ItemCard {...item} key={item.id} />
            ))
        }
        </Card.Group>
      </div>
    )
  }
}


export default graphql(fetchCategory,{
  options: ({ id }) => ({ variables: { id } })
})(CustomMenu)
