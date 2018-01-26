import React, { Component } from 'react'
import fetchCategory from '../queries/fetchCategory.js'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

class SingleCategory extends Component {

  render() {
    //The item is this.props.data is now category due to database change
    if(this.props.data.loading) return <div>Loading</div>
    const { category,error } = this.props.data
    if ( error ) return <div>{ error.message }</div>
    return (
      <div className="container">
        <div>
          <h1><Link to="/menu">Back to Menu</Link></h1>
          <h3>{ category.name}</h3>
        </div>
        {
          category && category.items.map(({ id, name, content} ) => {
            return (
              <div key={id} className="menu-list-item">
                <div>
                  <Link to={`/SingleItem/${id}`}><h2>{name}</h2></Link>
                </div>
                <div>
                  <img src="/img/sampleImage.png" className="products_image img-responsive img-center" />
                </div>
                <div>
                  <h4>{content}</h4>
                </div>
              </div>
            )
          })
        }
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
