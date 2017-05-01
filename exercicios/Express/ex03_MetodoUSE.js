const express = require('express');
const server = express();

server.use('/api', function (request, response, next) {
    console.log('Inicio...');
    next();
    console.log('Fim...');
});


server.use('/api', (request, response) => {
    console.log('Resposta...');
    response.send('<h1>Filipe!</h1>');
});


server.listen(3000, () => console.log('Executando...'))
 

//node ex03_MetodoUSE