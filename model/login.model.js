const mongoose = require('mongoose');

const login = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Login', login)