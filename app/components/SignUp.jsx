import React, { Component } from 'react'
import history from '../history'

export default class SignUp extends Component {
  constructor (){
    super()
    this.state = {
      name: "",
      content: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const passwordOne = event.target.passwordOne.value
    const passwordTwo = event.target.passwordTwo.value
    if (passwordOne === passwordTwo) return 'Password does not match!'

    this.props.mutate({
      variables: {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.passwordOne.value
      },
      // refetchQueries: [{query: fetchMenu }]
    })
    .then(() => history.push("/"))
  }


  render() {

    return (
      <div className="container">
        <form>
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
              name="passwordOne"
            >
            </input>
          </div>
          <div>
            <h4>Re-enter Password: </h4>
            <input
              type="text"
              placeholder="Re-enter Password"
              name="passwordTwo"
            >
            </input>
          </div>

          <button id="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
