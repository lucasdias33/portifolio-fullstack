const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CON, () => {
    console.log("conectado ao Banco de Dados");
})