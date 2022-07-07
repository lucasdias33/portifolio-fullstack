const router = require('express').Router();
require('../db/conecaoDB');


const portifolio = require('./portifolio');

router.get('/', (req, res) => {
      res.json({
            sucess: false,
            mensage: '/api é dedicada exclusivamente ao servidor'

      })

});

router.use('/portifolio', portifolio);
module.exports = router;