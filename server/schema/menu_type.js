const graphql = require('graphql')
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = graphql

const  ItemType = require('./item_type')
const mongoose = require('mongoose');
//const Item = require('../models/items')
const Menu = mongoose.model('menu');

const MenuType = new GraphQLObjectType({
  name: 'MenuType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    content: { type: GraphQLString },
    items: { type: new GraphQLList(ItemType),
      resolve(parentValue){
        return Menu.findItems(parentValue._id);
      }
    }
  })
})

module.exports = MenuType

