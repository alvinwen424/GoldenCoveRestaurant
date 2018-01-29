import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import fetchMenu from '../queries/fetchMenu.js'
// import { BrowserHistory as history} from 'react-router-dom'
import history from '../history'
import StillLoading from './StillLoading'
import { Form, TextArea } from 'semantic-ui-react'

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
    }
  }

  onChange = (event, {name, value}) => {
    console.log(name, value);
    this.setState({[name]: value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.mutate({
      variables: {...this.state},
    })
    .then(() => history.push("/menu"))
  }

  render() {
    if (this.props.data.loading) return <StillLoading />
    const { menu } = this.props.data;
    const options = menu.map(({name, id}) => {
      return ({ key: id, value: id, text: name })
    })
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          name="name"
          label="Name"
          placeholder ="Enter name"
          onChange={this.onChange}
        />
        <Form.Field
          control={TextArea}
          name="content"
          label="Content"
          placeholder="Enter Content"
          onChange={this.onChange}
        />
        <Select
          options={options}
          name="category"
          label="Category"
          placeholder="Category"
          onChange={this.onChange}
        />
        <Group inline>
          <Input
            name="smallPrice"
            label="Small Price"
            placeholder="Enter small price"
            onChange={this.onChange}
          />
          <Input
            name="largePrice"
            label="Large Price"
            placeholder="Enter large price"
            onChange={this.onChange}
          />
        </Group>
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
