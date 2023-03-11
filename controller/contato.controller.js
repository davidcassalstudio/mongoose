const Contatos = require('../model/contatos.model');

exports.getContato = (req, res, next) => {
    res.render('contato')
}


exports.postContato = (req, res, next) => {
    Contatos.create({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone 
    })
    .then(response => {
        res.redirect('/home')
    }).catch(error => {
        console.error('Algo aconteceu, tente novamente mais tarde.')
    })
}

// const Contatos = require('../model/contatos.model');

// exports.getContato = async (req, res, next) => {

//     const contato = await Contatos.find({nome: "Rafael Macedo"});
//     console.log(contato);
//     res.render('contato')
// }