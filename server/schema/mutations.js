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
        title: { type: GraphQLString},
        content: { type: GraphQLString},
      },
      resolve(parentValue, {title, content}) {
        return (new Menu({title, content})).save()
      }
    }
  }
})


module.exports = mutation
