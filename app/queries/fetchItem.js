import gql from 'graphql-tag'

export default gql`
  query fetchItem($id: ID!){
    item(id: $id){
      id
      content
      name
      largePrice
      smallPrice
      menu{
        id
      }
    }
  }
`;
