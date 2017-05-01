const express = require('express')
const server = express()
const router = require('./ex5_ExpressRouter')

server.use('/api', router)

server.listen(3000, () => console.log('Executando...'))

/*
//OUTRA FORMA DE CHAMAR...
server.listen(3000, function () {
    console.log('Executando...')
})
*/

//node ex5_ExpressRouterExercicio