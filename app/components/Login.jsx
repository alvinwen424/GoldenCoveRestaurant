import React, { Component } from 'react'
import history from '../history'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// import query from '../queries/fetchUser'

class Login extends Component {
  constructor (props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onChange = ((event, {name, value}) => this.setState({ [name]: value }));

  onSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {...this.state}
    })
    .then(() => history.push('/'))
  }

  conponentWillUpdate(nextProps){
    if(!this.prop.data.user && nextProps.data.user){
      history.push('/')
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

export default graphql(mutation)(Login)
