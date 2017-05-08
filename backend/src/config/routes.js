const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Ciclo de Pagamento 
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}

/*

{  
  "name": "Outubro/2017",
  "month": 10,
  "year": 2017,  
  "debts": [
    {
      "name": "Telefone",
      "value": 150.27,
      "status": "AGENDADO"
    },
    {
      "name": "Alugel",
      "value": 750,
      "status": "AGENDADO"
    }
  ],
  "credits": [
    {
      "name": "Salario Empresa",
      "value": 5000
    },
    {
      "name": "Salario Freelancer",
      "value": 2000
    }
  ]
}

*/