import React, { Component } from 'react'
import history from '../history'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SignUp extends Component {
  constructor (){
    super()
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordTwo: "",
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const passwordOne = event.target.password.value
    const passwordTwo = event.target.passwordTwo.value
    if (password !== passwordTwo) return 'Password does not match!'

    this.props.mutate({
      variables: {...this.state}
    })
    .then(() => history.push("/"))
  }

  onChange = ({target}) => { this.setState({ [target.name]: target.value }) }


  render() {

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div>
            <h4>Name: </h4>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            >
            </input>
          </div>
          <div>
            <h4>Email: </h4>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            >
            </input>
          </div>
          <div>
            <h4>Enter Password: </h4>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            >
            </input>
          </div>
          <div>
            <h4>Re-enter Password: </h4>
            <input
              type="password"
              placeholder="Re-enter Password"
              name="passwordTwo"
              value={this.state.passwordTwo}
              onChange={this.onChange}
            >
            </input>
          </div>

          <button id="submit" className="btn btn-primary">Create Account</button>
        </form>
      </div>
    )
  }
}

const mutation = gql`
mutation SignUp($email: String, $password: String, $name: String){
  signup(email: $email, name: $name, password: $password ){
    name
    email
  }
}
`

export default graphql(mutation)(SignUp)
