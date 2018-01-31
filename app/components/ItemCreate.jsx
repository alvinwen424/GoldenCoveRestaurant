import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import fetchMenu from '../queries/fetchMenu.js'
// import { BrowserHistory as history} from 'react-router-dom'
import history from '../history'
import StillLoading from './StillLoading'
import { Form, TextArea, Message } from 'semantic-ui-react'

const { Input, Select, Button, Group, Field} = Form;

class AddItem extends Component {
  constructor (){
    super()
    this.state = {
      name: "",
      content: "",
      category: "",
      largePrice: "",
      smallPrice: "",
      errorFlag: false,
      errors: [],
    }
  }

  onChange = (event, {name, value}) => {
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.mutate({
      variables: {...this.state},
    })
    .then(() => history.push("/menu"))
    .catch((response) => {
      const errors = response.graphQLErrors.maps(({message}) => message);
      this.setState({ errors, errorFlag: true })
    })
  }


  render() {
    if (this.props.data.loading) return <StillLoading />
    const { menu } = this.props.data;
    const options = menu.map(({name, id}) => {
      return ({ key: id, value: id, text: name })
    }).sort((a, b) => {
      const aName = a.text.toLowerCase();
      const bName = b.text.toLowerCase();
      if (aName == bName) return 0;
      return (aName < bName) ? -1 : 1;
    })
    return (
      <Form onSubmit={this.onSubmit} error={this.state.errorFlag}>
        <Input
         required
          name="name"
          label="Name"
          placeholder ="Enter name"
          onChange={this.onChange}
        />
        <Form.Field
          required
          control={TextArea}
          name="content"
          label="Content"
          placeholder="Enter Content"
          onChange={this.onChange}
        />
        <Select
          required
          options={options}
          name="category"
          label="Category"
          placeholder="Category"
          onChange={this.onChange}
        />
        <Group inline>
          <Input
            required
            name="smallPrice"
            label="Small Price"
            placeholder="Enter small price"
            onChange={this.onChange}
          />
          <Input
            required
            name="largePrice"
            label="Large Price"
            placeholder="Enter large price"
            onChange={this.onChange}
          />
        </Group>
        {
          this.state.errors.map((message) => {
            return <Message
              error
              header="graphql error"
              content={message}
            />
          })
        }
        <Field control={Button}> Submit </Field>
      </Form>
    )
  }
}

const mutation = gql`
mutation AddItem(
  $name: String,
  $content: String,
  $smallPrice: String,
  $largePrice: String,
  $category: ID){
  addItem(
    name: $name,
    content: $content,
    smallPrice: $smallPrice,
    largePrice: $largePrice,
    menuId: $category) {
      id
      name
      content
      smallPrice
      largePrice
  }
}
`

export default graphql(fetchMenu)(graphql(mutation)(AddItem));
