const mongoose = require('mongoose')

var Schema = mongoose.Schema

const deckSchema = Schema({
    name: {type: String},
    warriors:[{type:Schema.Types.ObjectId, ref:'Warrior'}],
    averageEnergy: {type: Number}
})

var Deck = mongoose.model('Deck', deckSchema)
module.exports = Deck