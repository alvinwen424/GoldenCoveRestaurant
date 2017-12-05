import gql from 'graphql-tag'

const query = gql`
query fetchCategory($id: ID!){
  category(id: $id){
    name
    content
    image
  }
}
`

export default query
