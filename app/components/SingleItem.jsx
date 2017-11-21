import React, { Component } from 'react'
import fetchItem from '../queries/fetchItem.js'
import { graphql } from 'react-apollo'

class SingleItem extends Component {

  render() {
    const { item } = this.props.data
    return (
      <div>
        { item &&
          <div className="single-item col-large-4">
            <h1>
              {item.name}
            </h1>
            <img
              src="/img/sampleImage.png"
              className="products_image img-responsive img-center"
            />
            <h3>
              {item.content}
            </h3>
          </div>
        }
      </div>
    )
  }
}

export default graphql(fetchItem, {
  //the props for the options the same as this.props in the class above
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      }
    }
  }


})(SingleItem)
