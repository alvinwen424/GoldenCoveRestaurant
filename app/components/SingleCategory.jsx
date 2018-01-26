import React, { Component } from 'react'
import fetchCategory from '../queries/fetchCategory.js'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import StillLoading from './StillLoading'
import ItemCard from './ItemCard'


class SingleCategory extends Component {
  render() {
    //The item is this.props.data is now category due to database change
    if (this.props.data.loading) return <StillLoading />
    const { category,error } = this.props.data
    if ( error ) return <div>{ error.message }</div>
    return (
      <div className="container">
        <div>
          <h1><Link to="/menu">Back to Menu</Link></h1>
          <h3>{ category.name}</h3>
        </div>
        <Card.Group itemPerRow={3}>
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

export default graphql(fetchCategory, {
  //the props for the options the same as this.props in the class above
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }


})(SingleCategory)
