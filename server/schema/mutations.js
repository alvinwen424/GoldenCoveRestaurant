const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql
const mongoose = require('mongoose')
const Menu = mongoose.model('menu')
const menuType = require('./menu_type')

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addItem: {
      type: menuType,
      args: {
        name: { type: GraphQLString},
        content: { type: GraphQLString},
      },
      resolve(parentValue, {name, content}) {
        return (new Menu({name, content})).save()
      }
    }
  }
})


module.exports = mutation
