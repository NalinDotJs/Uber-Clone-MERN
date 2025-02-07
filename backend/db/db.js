const mongoose = require('mongoose')

const connectToDB = () => {
    try {
        mongoose.connect(process.env.DB_CONNECT)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log("Error connecting to MongoDB : ", error)
    }
}

module.exports = connectToDB