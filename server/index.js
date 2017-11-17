const path = require('path')
const express = require('express')
const models = require('./models')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()

const MONGO_URI = 'mongodb://alvinwen424:freedom125@ds259255.mlab.com:59255/workingdb'
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}


mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI)
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))


app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
  }))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use(express.static(path.join(__dirname, '../node_modules')))
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

// if (module === require.main) {
  app.listen(4000, function () {
    console.log('App is listening on port 4000!')
  })
// }

// module.exports = app
