const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const MenuType = require('./menu_type')
const Menu = mongoose.model('menu')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    menu: {
      type: new GraphQLList(MenuType),
      resolve() {
        return Menu.find({})
      }
    },
    item: {
      type: new GraphQLList(MenuType),
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(parentValue, { id }) {
        return Menu.findById(id)
      }
    }
  })
})

module.exports = RootQuery
