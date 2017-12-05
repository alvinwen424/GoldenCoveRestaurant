const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const Menu = mongoose.model('menu')
const menuType = require('./menu_type')
const UserType = require('./user_type')
const AuthService = require('../services/auth')
const Item = mongoose.model('item')
const itemType = require('./item_type')

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    // addItem: {
    //   type: menuType,
    //   args: {
    //     name: { type: GraphQLString },
    //     content: { type: GraphQLString },
    //     image: { type: GraphQLString }
    //   },
    //   resolve(parentValue, {name, content}) {
    //     return (new Menu({name, content})).save()
    //   }
    // },
    addItem: {
      type: itemType,
      args: {
        name: { type: GraphQLString},
        content: { type: GraphQLString},
        smallPrice: { type: GraphQLString},
        largePrice: { type: GraphQLString},
        categoryId: { type: GraphQLString}
      },
      resolve(parentValue, { name, content, smallPrice, largePrice }){
        return (new Item({name, content, smallPrice, largePrice})).save()
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
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req
        req.logout()
        return user
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString},
        password: { type: GraphQLString}
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ password, email, req})
      }
    }
  }
})


module.exports = mutation
