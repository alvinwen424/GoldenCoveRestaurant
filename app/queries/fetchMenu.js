import gql from 'graphql-tag'

const query = gql`
{
  menu{
    id
    name
    content
    image
  }
}
`
export default query
