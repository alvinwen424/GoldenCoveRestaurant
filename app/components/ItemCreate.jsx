import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import fetchMenu from '../queries/fetchMenu.js'
// import { BrowserHistory as history} from 'react-router-dom'
import history from '../history'

class AddItem extends Component {
  constructor (){
    super()
    this.state = {
      name: "",
      content: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {name, content, smallPrice, largePrice, category} = e.target
    this.props.mutate({
      variables: {
        name: name.value,
        content: content.value,
        smallPrice: smallPrice.value,
        largeprice: largeprice.value
      },
      refetchQueries: [{query: fetchMenu }]
    })
    .then(() => history.push("/menu"))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <div>
            <h4>Name: </h4>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
            >
            </input>
          </div>
          <div>
            <h4>Content: </h4>
            <textarea
              type="text"
              rows="3" cols="100"
              placeholder="Enter Content"
              name="content"
            />
          </div>
          <div>
            <h4>Small Price: </h4>
            <textarea
              type="text"
              rows="3" cols="100"
              placeholder="Enter Small Price"
              name="smallPrice"
            />
          </div>
          <div>
            <h4>Large Price: </h4>
            <textarea
              type="text"
              rows="3" cols="100"
              placeholder="Enter Large Price"
              name="largePrice"
            />
          </div>
          <div>
            <h4>Category: </h4>
            <select>
              <option name="Category" value="Beef">Beef</option>
              <option name="Category" value="Poultry">Poultry</option>
              <option name="Category" value="Soups">Soups</option>
              <option name="Category" value="Appetizers">Appetizers</option>
              <option name="Category" value="Moo Shi Specialties">Moo Shi Specialties</option>
              <option name="Category" value="Pork">Pork</option>
              <option name="Category" value="Vegatables">Vegatables</option>
              <option name="Category" value="Seafood">Seafood</option>
              <option name="Category" value="Chow Fun">Chow Fun</option>
              <option name="Category" value="Fried Rice">Fried Rice</option>
              <option name="Category" value="Lo Mein">Lo Mein</option>
              <option name="Category" value="Chow Mein">Chow Mein</option>
              <option name="Category" value="Sweet and Sour">Sweet and Sour</option>
              <option name="Category" value="Diet Menu">Diet Menu</option>
              <option name="Category" value="Chef's Specialties">Chef's Specialties</option>
              <option name="Category" value="Combination Platters">combination Platters</option>
              <option name="Category" value="Sides">Sides</option>
              <option name="Category" value="Lunch Specials">Lunch Specials</option>
              <option name="Category" value="Egg Foo Young">Egg Foo Young</option>
            </select>
          </div>
          <button id="submit" className="btn btn-primary">Submit</button>
        </form>
        <div>
          <canvas id="myCanvas" width="200" height="100"></canvas>
        </div>
      </div>
    )
  }
}

const mutation = gql`
mutation AddItem(
  $name: String,
  $content: String,
  $smallPrice: String,
  $largePrice: String,
  $menuId: ID){
  addItem(
    name: $name,
    content: $content,
    smallPrice: $smallPrice,
    largePrice: $largePrice,
    menuId: $menuId) {
      id
      name
      content
      smallPrice
      largePrice
  }
}
`

export default graphql(mutation)(AddItem)
