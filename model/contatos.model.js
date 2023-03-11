const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Contatos', contatoSchema);

// const mongoose = require('mongoose');

// const contatoSchema = mongoose.Schema({
//     nome: {
//         type: String,
//         require: true 
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     telefone: {
//         type: String,
//         require: true
//     }
// })

// module.exports = mongoose.model('Contatos', contatoSchema);