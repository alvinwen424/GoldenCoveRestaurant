import React, { Component } from 'react'
import history from '../history'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import query from '../queries/fetchUser'

class Login extends Component {
  constructor (){
    super()
  }

  onSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value
    this.props.mutate({
      variables: {
        email,
        password
      },
      refetchQueries: [{ query }]
    })
    .then(() => history.push('/'))
  }

  conponentWillUpdate(nextProps){
    if(!this.prop.data.user && nextProps.data.user){
      history.push('/dashboard')
    }
  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div>
            <h4>Email: </h4>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
            >
            </input>
          </div>
          <div>
            <h4>Enter Password: </h4>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
            >
            </input>
          </div>

          <button id="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }
}


const mutation = gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password){
    email
    name
  }
}
`

export default graphql(mutation)(graphql(query)(Login))
