const Contatos = require('../model/contatos.model');

exports.getHome = async (req, res, next) => {
    const contatos = await Contatos.find();

    res.render('home', {contatos})
}

