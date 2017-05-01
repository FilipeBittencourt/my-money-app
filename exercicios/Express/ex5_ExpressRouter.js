const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
    const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now()- init} ms.`)
});


router.get('/produtos/:id', (request, response) => {
    response.json({ id: request.params.id, name: 'Caneta' })
})

router.get('/clientes/:id/:name', (request, response) => {
    response.json({ id: request.params.id, name: request.params.name })
})


module.exports = router


//node ex4_route