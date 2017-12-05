import axios from 'axios'
import history from '../history'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const removeUser = () => ({type: REMOVE_USER})

/**
 * THUNK CREATORS
 */
export const login = (email, password) =>
  dispatch => {
    this.props.mutate({
      variables: {
        email,
        password
      }
    })
    .then(foundUser => dispatch(getUser(foundUser)))
    .then(() => history.push('/'))
  }

export const logout = () =>
  dispatch =>
    axios.post('/auth/logout')
      .then(() => {
        dispatch(removeUser())
        history.push('/login')
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
  case GET_USER:
    return action.user
  case REMOVE_USER:
    return {}
  default:
    return state
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

