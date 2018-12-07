const mongoose = require('mongoose')

var Schema = mongoose.Schema

const deckSchema = Schema({
    name: {type: String},
    warrios:[{type:Schema.Types.ObjectId, ref:'Warrior'}],
    averageEnergy: {type: Number}
})

var Level = mongoose.model('Deck', deckSchema)
model.exports = Deck