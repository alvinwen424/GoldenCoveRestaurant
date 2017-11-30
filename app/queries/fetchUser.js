import gql from 'graphql-tag'

const query = gql`
{
  user {
    id
    email
    name
  }
}
`


export default query
