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
            <div key={item.id} className="menu-item col-md-4">
              <li>
                <Link to={`/SingleItem/${item.id}`}><h2>{item.name}</h2></Link>
                <img src="/img/sampleImage.png" className="products_image img-responsive img-center" />
                <h4>{item.content}</h4>
              </li>
            </div>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default graphql(fetchMenu)(Menu)

