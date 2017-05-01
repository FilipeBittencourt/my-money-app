const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

const teste = require('../api/billingCycle/billingCycle')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())


server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
    
    teste.Filipe((resquest, response, next) => {
        console.log("Eu")
        
    });

})

module.exports = server