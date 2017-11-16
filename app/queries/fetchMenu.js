import gql from 'graphql-tag'

const query = gql`
{
  menu{
    id
    name
    content
  }
}
`
export default query
