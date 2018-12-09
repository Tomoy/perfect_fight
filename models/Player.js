const mongoose = require('mongoose')

var Schema = mongoose.Schema

const playerSchema = Schema({
    name: {type: String},
    trophies: {type: Number, default: 0},
    level: {type: Number, default: 0}
})

var Player = mongoose.model('Player', playerSchema)
module.exports = Player