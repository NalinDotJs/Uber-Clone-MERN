const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name should be atleast 3 characters long !']
        },
        lastname: {
            type: String,
            minlength: [3, 'last name should be atleast 3 characters long !']
        }

    },
    email: {
        tupe: String,
        required: true,
        unique: true,
        minlength: [5, 'Email should be atleast 5 characters long !']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    }
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
    return token
}

userSchema.methods.comparePasswords = async (password) => {
    return await bcrypt.compare(password, this, password
    )
}

userSchema.static.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("User", userSchema)
module.exports = userModel;