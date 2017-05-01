const express = require('express');
const server = express();

server.route('/clientes')
.get((request, response) => response.send(teste()))
.post((request, response) => response.send('Novo Cliente'))
.put((request, response) => response.send('Alterar Cliente'))
.delete((request, response) => response.send('Remove Cliente'))

teste = () => {
    return 'Lista de Clientes'
}
/*
server.use('/api', (request, response) => {
    console.log('Resposta...');
    response.send('<h1>Filipe!</h1>');
});
*/

server.listen(3000, () => console.log('Executando...'))


//node ex4_route