const mongoose = require('mongoose');

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
    },
})

module.exports = User;