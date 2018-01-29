import React, { Component } from 'react'
import fetchCategory from '../queries/fetchCategory.js'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import StillLoading from './StillLoading'
import CustomMenu from './CustomMenu'

class SingleCategory extends Component {
  render() {
    //The item is this.props.data is now category due to database change
    console.log(this.props.match.params.id)
    return (
          <div>
            <h4><Link to="/menu">Back to Main Menu</Link></h4>
            <CustomMenu id={this.props.match.params.id} />
          </div>
    )
  }
}

export default SingleCategory
