import React, { Component } from 'react'
import fetchItem from '../queries/fetchItem.js'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

class SingleItem extends Component {

  render() {
    const { item } = this.props.data
    return (
      <div className="container">
        <div>
          <h1><Link to="/menu">Back to Menu</Link></h1>
        </div>
        { item &&
          <div className="single-item col-large-4">
            <div>
              <h1>
                {item.name}
              </h1>
            </div>
            <div>
              <img
                src="/img/sampleImage.png"
                className="products_image img-responsive img-center single-item-image"
              />
            </div>
            <div>
              <h3>
                {item.content}
              </h3>
            </div>
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
