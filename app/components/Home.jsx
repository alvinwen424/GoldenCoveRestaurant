import React, { Component } from 'react';
import fetchUser from '../queries/fetchUser.js'
import { graphql } from 'react-apollo'
import StillLoading from './StillLoading'
import CustomMenu from './CustomMenu'
//Homepage should render lunch menu when from 11-5
//And render favorites any other times


const SpecialtiesId = "5a270d269f7a9be16ffedd91"
const LunchId = "5a270d3c9f7a9be16ffedd93"

class Home extends Component {
  constructor(props) {
    super(props);
    const hour = new Date().getHours()
    const lunchTime = (hour > 10) && (hour < 18)
    const id = lunchTime ? LunchId : SpecialtiesId
    this.state = { lunchTime, id };
  }
  componentDidMount() {
    //this will update EVERY SECOND
    this.intervalID = setInterval(() => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    const hour = new Date().getHours()
    const lunchTime = (hour > 10) && (hour < 18)
    const id = lunchTime ? LunchId : SpecialtiesId
    this.setState({ lunchTime, id });
  }

  render() {
    const { user, loading } = this.props.data
    if (loading) return <StillLoading />
    return (
      <div className="home">
        { user && <h1>Hi {user.name} </h1>}
        <h1>Welcome to Golden Cove Restaurant</h1>
        <CustomMenu {...this.state} />
      </div>
    )
  }
}

export default graphql(fetchUser)(Home)
