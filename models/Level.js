const mongoose = require('mongoose')

var Schema = mongoose.Schema

const levelSchema = Schema({
    amountOfTowers: {type: Number},
    backgroundImage: {type: String}
})

var Level = mongoose.model('Level', levelSchema)
model.exports = Level