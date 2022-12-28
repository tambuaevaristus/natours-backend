const mongoose = require('mongoose');
// const validator = require('validator');


const userSchhema = new mongoose.Schema ({
    name: {
        type:String,
        required: [true, 'Please enter a name']
    },
    email: {
        type:String,
        required: [true, 'Please enter  a email'],
        unique: true,
        lowercase: true,
        // validate: [validator.isEmail, 'Please enter a valid email']
    },
    photo: String,
    password: {
        type: String,
        required: [true, "please enter a password"],
        minLength: 8
    },

    passwordConfirm:{
        type: String,
        required: [true, "please enter a password"]
    }
})

 const User = mongoose.model("User", userSchema);

 module.exports = User;