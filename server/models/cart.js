const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  items: {
    type: Schema.Types.ObjectId,
    ref: 'item'
  }
})

export default CartSchema
