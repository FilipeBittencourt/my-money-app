const _ = require('lodash')

module.exports = (resquest, response, next) => {
    const bundle = response.locals.bundle
    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        response.json({ errors })
    } else {
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, function (error) {
        errors.push(error.message)
    })
    return errors
}

// USANDO ARROW FUNCTION
const parseErrors___ = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, (error) => errors.push(error.message))
    return errors    
}