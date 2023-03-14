const express       = require('express');
const app           = express();
const PORT          = process.env.PORT || 3000;
const homeRouter    = require('./routes/home/home');
const contatoRouter = require('./routes/contato/contato');
const loginRouter   = require('./routes/login/login.routes');
const path          = require('path');
const mongoose      = require('mongoose');


// console.log(process.env.USER)
// console.log(process.env.PASS)

// MongoDB Database Connection
//mongoose.connect('mongodb://127.0.0.1:27017/aguiasmartech') 
mongoose.connect(`mongodb+srv://aguiasmartech:aM6UQ6Y4UsW3pPLL@aguiasmartech.bo7qyqz.mongodb.net/?retryWrites=true&w=majority`)
    .then(response => {
        console.log('Conectado com sucesso!');
    })
    .catch(error => {
        console.error('Não foi possível conectar ao banco de dados, tente novamente mais tarde');
    })

// MySQL Database Connection 

// Middlewares
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));


// Routes
app.use(loginRouter);
app.use(homeRouter);
app.use(contatoRouter);

// Listen | PORT
app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
})