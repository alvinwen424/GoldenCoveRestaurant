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
    this.props.mutate({
      variables: {
        name: e.target.name.value,
        content: e.target.content.value
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
mutation AddItem($name: String, $content: String, $image: String){
  addItem(name: $name, content: $content, image: $image) {
    id
  }
}
`

export default graphql(mutation)(AddItem)
