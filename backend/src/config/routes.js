const express =  require('express')
module.exports =  function(server){
    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //BillingCycleService Routes
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycle')
}