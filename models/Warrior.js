const mongoose = require('mongoose')

var Schema = mongoose.Schema

const warriorSchema = Schema({
    name: {type: String},
    hitPoints: {type: Number, default: 0},
    attack: {type: Number, default: 0},
    energyCost: {type: Number}
})

var Warrior = mongoose.model('Warrior', warriorSchema)
model.exports = Warrior