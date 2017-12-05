const mongoose = require('mongoose')
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql
const MenuType = require('./menu_type')
const Menu = mongoose.model('menu')
const UserType = require('./user_type')
const Item = mongoose.model('item')
const ItemType= require('./item_type')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    menu: {
      type: new GraphQLList(MenuType),
      resolve() {
        return Menu.find({})
      }
    },
    category: {
      type: MenuType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(parentValue, { id }) {
        return Menu.findById(id)
      }
    },
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user
      }
    },
    item: {
      type: ItemType,
      args: {id: {type: new GraphQLNonNull(GraphQLID)}},
      resolve(parentValue, { id }) {
        return Item.findById(id)
      }
    }
  })
})

module.exports = RootQuery
