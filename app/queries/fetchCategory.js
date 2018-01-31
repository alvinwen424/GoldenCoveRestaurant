import gql from 'graphql-tag'

const query = gql`
query fetchCategory($id: ID!){
  category(id: $id){
    id
    name
    content
    items {
      name
      content
      id
    }
  }
}
`

export default query
