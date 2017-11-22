import React, { Component } from 'react'
import history from '../history'

export default class Login extends Component {
  constructor (){
    super()
  }

  onSubmit = (event) => {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    console.log('Email ', email, 'Password ', password)

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
              type="text"
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
