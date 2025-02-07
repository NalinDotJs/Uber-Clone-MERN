const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
app.use(cors())

const connectToDB = require('./db/db')
connectToDB()

app.get('/', (req,res)=>{
    console.log('route hit')
    res.send("Hello world")
})

module.exports = app;