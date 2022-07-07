const express = require('express');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();

const api = require('./backend/routes/index');

app.use(bodyparser.json())


app.get('/', (req, res) => {
    res.json({
        'sucess': true

    });
});


app.use('/api', api);

const PORT = process.env.PORT;
app.listen(PORT);