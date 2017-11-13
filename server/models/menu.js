const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
  title: { type: String},
  category: { type: String},
  content: { type: String}
})

mongoose.model('menu', MenuSchema)

