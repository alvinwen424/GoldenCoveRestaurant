const mongoose = require('mongoose')
const graphql = require('graphql')
const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} = graphql
const Item = mongoose.model('item')

const ItemType = new GraphQLObjectType({
  name: 'ItemType',
  fields: () => ({
    id: { type: GraphQLID},
    content: { type: GraphQLString},
    name: {type: GraphQLString},
    smallPrice: { type: GraphQLString},
    largePrice: { type: GraphQLString},
    menu: {
      type: require('./menu_type'),
      resolve(parentValue) {
        return Item.findById(parentValue).populate('menu')
          .then(item => {
            return item.menu
          })
      }
    }
  })
})

export default ItemType
