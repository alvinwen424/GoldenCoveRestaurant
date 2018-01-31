const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MenuSchema = new Schema({
  name: { type: String},
  content: { type: String},
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
})

MenuSchema.statics.addItem = function(menuId, name, content, smallPrice, largePrice) {
  const Item = mongoose.model('item')

  return this.findById(menuId)
    .then(category => {
      const item = new Item({ name, content, smallPrice, largePrice, menu: category})
      category.items.push(item)
      return Promise.all([category.save(), item.save()])
        .then(([category, item]) => item)
    })
}

MenuSchema.statics.findItems = function(id){
  return this.findById(id)
  .populate('items')
  .then((foundMenu) => foundMenu.items)
}

mongoose.model('menu', MenuSchema)

