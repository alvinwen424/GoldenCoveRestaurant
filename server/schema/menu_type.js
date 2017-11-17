const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql

const MenuType = new GraphQLObjectType({
  name: 'MenuType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    image: { type: GraphQLString }
  })
})

module.exports = MenuType

