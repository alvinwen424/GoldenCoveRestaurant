const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemsSchema = new Schema({
  menu: {
    type: Schema.Types.ObjectId,
    ref: 'menu'
  },
  name: { type: String },
  content: { type: String },
  smallPrice: { type: String },
  largePrice: { type: String }
})

mongoose.model('item', ItemsSchema)
