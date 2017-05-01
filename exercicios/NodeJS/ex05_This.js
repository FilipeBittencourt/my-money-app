console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.diaOi = function () {
    console.log('Oi!!!')
}

//no terminal digite:  node ex05_This