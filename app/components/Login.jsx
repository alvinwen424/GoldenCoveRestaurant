import React, { Component } from 'react'
import history from '../history'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Form, Message } from 'semantic-ui-react';
import query from '../queries/fetchUser'

const { Input, Button, Field } = Form;

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
        <Form onSubmit={this.onSubmit}>
          <Input
            label="Email:"
            placeholder="Enter email"
            name="email"
          />
          <Input
            type='password'
            label="password"
            placeholder="password"
            name="password"
          />
          <Button type='submit'>Submit</Button>
        </Form>
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
