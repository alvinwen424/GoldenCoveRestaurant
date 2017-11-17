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
          <label> Name </label>
          <input
            name="name"
          />
          <label> Content </label>
          <input
            name="content"
            />
          <button id="submit">Submit</button>
        </form>
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
