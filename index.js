
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const databaseURL = 'mongodb+srv://user:user......@cluster0.2kjkr.mongodb.net'

const app = express()
app.use(cors())


app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/history', require('./api/route'))







const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log(`APP is Running on PORT ${PORT}`)
    
    mongoose.connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
        if (err) {
            console.log('Database Connection Error')
        } else {
            console.log('Database is Connected Successfully')
        }
    })
})
