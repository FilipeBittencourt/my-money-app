const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

BillingCycle.updateOptions({ new: true, runValidators: true })

//interceptor error
BillingCycle.after('post', errorHandler)
    .after('get', errorHandler)
    .after('put', errorHandler)
    .after('delete', errorHandler)
    .after('summary', errorHandler)


BillingCycle.route('count', (resquest, response, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            response.json({ erros: [error] })
        } else {
            response.json({ value })
        }
    })
})

BillingCycle.route('summary', (resquest, response, next) => {
    BillingCycle.aggregate({
        $project: { credit: { $sum: "$credits.value" }, debt: { $sum: "$debts.value" } }
    }, {
            $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debt" } }
        }, {
            $project: { _id: 0, credit: 1, debt: 1 }
        }, (error, result) => {
            if (error) {
                response.json({ erros: [error] })
            } else {
                response.json(result[0] || { credit: 0, debt: 0 })
            }
        })
})

module.exports = BillingCycle