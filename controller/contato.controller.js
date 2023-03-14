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
        res.redirect('/')
    }).catch(error => {
        console.error('Algo aconteceu, tente novamente mais tarde.')
    })
}

exports.getEditar = async (req, res, next) => {
    const contatos = await Contatos.find({_id: req.params.id})

    res.render('editar', {contatos})
}

exports.postEditar = (req, res, next) => {
    Contatos.updateOne({
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone 
    })
    .then(response => {
        res.redirect('/')
    }).catch(error => {
        console.error('Algo aconteceu, tente novamente mais tarde.')
    })
}