const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)


/*

name: Abril/2017
month: 4
year: 2017
credits[0][name]: Salario Empresa
credits[0][value]: 5000
credits[1][name]: Salario Freelancer
credits[1][value]: 2000
debts[0][name]: Telefone
debts[0][value]: 150.27
debts[0][status]: PAGO
debts[1][name]: Alugel
debts[1][value]: 750
debts[1][status]: AGENDADO

------------------------------------------------------------

{  
  "name": "Maio/2017",
  "month": 5,
  "year": 2017,  
  "debts": [
    {
      "name": "Telefone",
      "value": 150.27,
      "status": "PAGO"
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