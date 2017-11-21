const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const Menu = mongoose.model('menu')
const menuType = require('./menu_type')
const UserType = require('./user_type')
const AuthService = require('../services/auth')

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addItem: {
      type: menuType,
      args: {
        name: { type: GraphQLString },
        content: { type: GraphQLString },
        image: { type: GraphQLString }
      },
      resolve(parentValue, {name, content}) {
        return (new Menu({name, content})).save()
      }
    },
    signup: {
      type: UserType,
      args: {
        email: { type: (GraphQLString) },
        password: { type: (GraphQLString) },
        name: { type: (GraphQLString) }
      },
      resolve(parentValue, {name, email, password}, req) {
         return AuthService.signup({name, email, password, req })
      }
    }
  }
})


module.exports = mutation
