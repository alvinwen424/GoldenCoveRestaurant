import React, { Component } from 'react'
import fetchCategory from '../queries/fetchCategory.js'
import { graphql } from 'react-apollo'

import StillLoading from './StillLoading'
import CustomMenu from './CustomMenu'

class SingleCategory extends Component {
  render() {
    //The item is this.props.data is now category due to database change
    console.log(this.props.match.params.id)
    return (
          <CustomMenu id={this.props.match.params.id} />
    )
  }
}

export default SingleCategory
