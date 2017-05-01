const express = require('express')
const server = express()

server.get('/', function (request, response) {
    response.send('<h1>Index!</h1>')
})

server.all('/teste', (request, response) => {
     response.send('<h1>Filipe!</h1>')
})


server.all('/api/', (request, response) => {
     response.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))

/*
//OUTRA FORMA DE CHAMAR...
server.listen(3000, function () {
    console.log('Executando...')
})
*/

//node ex01_ConfiguracaoMapeando