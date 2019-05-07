let mongoose = require('mongoose')
let localMongo = 'mongodb://localhost/hunters'

mongoose.connect(process.env.MONGODB_URI || localMongo, {useNewUrlParser: true});

module.exports.Bounty = require('./bounty')
