const express = require('express');
const server = express();

server.get('/', function (request, response, next) {
    console.log('Inicio...');
    next();
    console.log('Fim...');
});


server.get('/', (request, response) => {
    console.log('Resposta...');
    response.send('<h1>Filipe!</h1>');
});


server.listen(3000, () => console.log('Executando...'))
 

//node ex02_CadeiaDeMiddlewares