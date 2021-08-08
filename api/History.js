const mongoose = require('mongoose')

const Schema = mongoose.Schema
// or 
// const {Schema} = mongose



const HistoryScema = new Schema({

    icon: String,
    name: String,
    country: String,
    main: String,
    description: String,
    temp: Number,
    pressure: Number,
    humidity: Number,

})



const History = mongoose.model('History', HistoryScema)

module.exports = History