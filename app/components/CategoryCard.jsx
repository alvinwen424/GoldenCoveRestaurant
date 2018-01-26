import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class CategoryCard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    console.log('Hello')
    const { id, name} = this.props;
    return(
    <div key={id} className="menu-list-item">
      <div>
        <Link to={`/SingleCategory/${id}`}><h2>{name}</h2></Link>
      </div>
      <div>
        <img src="/img/sampleImage.png" className="products_image img-responsive img-center" />
      </div>
    </div>
    );
  }
}


export default CategoryCard;
