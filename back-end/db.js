const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect(
        'mongodb://localhost/teste-tecnico-trybe',
        connectionParams
        );
        console.log(`Conexão com a base-de-dados bem-sucedida!`)
    } catch (error) {
        console.log(`Não foi possivel conectar à base-de-dados!`, error)
    }
};