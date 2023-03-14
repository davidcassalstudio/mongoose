const Login = require('../model/login.model');

exports.getLogin = (req, res, next) => {
    res.render('login')
}

exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const senha = req.body.senha;
    await Login.find({ $and: [ { email: email }, { senha: senha } ] })
        .then(data => {
            if(data.length > 0){
                res.redirect('/')
            }else if(data.length <= 0){
                res.redirect('/login')
            }
        })
}