const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLNonNull } = graphql
const mongoose = require('mongoose')
const Menu = mongoose.model('menu')
const Item = mongoose.model('item')
const menuType = require('./menu_type')
const UserType = require('./user_type')
const AuthService = require('../services/auth')
const ItemType = require('./item_type')

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addCategory: {
      type: menuType,
      args: {
        name: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parentValue, {name, content}) {
        return (new Menu({name, content})).save()
      }
    },
    addItem: {
      type: ItemType,
      args: {
        name: { type: GraphQLString},
        content: { type: GraphQLString},
        smallPrice: { type: GraphQLString},
        largePrice: { type: GraphQLString},
        menuId: { type: GraphQLID}
      },
      resolve(parentValue, {menuId, name, content, smallPrice, largePrice }){
        return Menu.addItem(menuId, name, content, smallPrice, largePrice)
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
