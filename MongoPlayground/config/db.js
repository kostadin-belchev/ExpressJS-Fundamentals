const mongoose = require('mongoose')
mongoose.Promise = global.Promise

require('../models/ImageSchema')
require('../models/TagSchema')

let connectionString = 'mongodb://localhost:27017/mongoplayground'
module.exports = mongoose.connect(connectionString)
