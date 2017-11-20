import gql from 'graphql-tag'

const query = gql`
query fetchItem($id: ID!){
  item(id: $id){
    name
    content
    image
  }
}
`

export default query
