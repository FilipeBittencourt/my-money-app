//inicio
mongod

mongo

//mostrar todas bases de dados
show dbs 

//Usar uma base de dados, mesmo que ela não exista pode ser usado o comando. USE
use db_finance

//Mostra em qual base você está
db

//Criando, exibir e apagando Collections
db.createCollection('billingcycles')
show collections
db.billingcycles.drop()


//inserts
db.billingcycles.insert({ name: "Janeiro17", month: 1, years: 2017 })
db.billingcycles.insert({ name: "Fevereiro17", month: 2, years: 2017 })

//inserts  com listas
db.billingcycles.insert({
    name: "Março17",
    month: 3,
    years: 2017,
    credits: [
        { name: "Salário", value: 5000 }
    ],
    debtis: [
        { name: "Luz", value: 100, status: "PAGO" },
        { name: "Telefone", value: 100, status: "PENDENTE" }
    ]
})




//Consultas SELECT

db.billingcycles.find()
db.billingcycles.find().pretty()
db.billingcycles.findOne()
db.billingcycles.findOne({ month: 2 })
db.billingcycles.find({ $or: [{ month: 1 }, { month: 2 }] }).pretty()
db.billingcycles.find({ credits: { $exists: true } }).pretty()
db.billingcycles.find({ credits: { $exists: true } },{_id:0, name:1}).pretty()
db.billingcycles.find({ years: 2017 })
db.billingcycles.find({ years: 2017 }).skip(1)
db.billingcycles.find({ years: 2017 }).skip(1).limit(1)

//Aggregate

db.billingcycles.aggregate([{
    $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debtis.value" }
    },
},
{
    $group: {
        _id: null,
        credt: { $sum: "$credit" },
        debt: { $sum: "$debt" }
    }
}])

//update
db.billingcycles.update(
    {$and: [{ month: 1}, { years: 2017 }] },
    {$set:{credits:[{name:"Salário", value:5000}]}}
)

//save - O SAVE muda o documento quando se passa a chave. Do contrario ele faz insert também.
db.billingcycles.save({ name: "xxxx", month: 5, years: 2020 })

db.billingcycles.save( 
 {"_id" : ObjectId("58e2460ca591954402d36ef4"), "name":"Filipe"} 
)

db.billingcycles.save(
{"_id" : ObjectId("58e2460ca591954402d36ef4"), "name": "xxxx", "month": 5, "years": 2020 }
)

//REMOVE

db.billingcycles.count()
db.billingcycles.remove({month:2})
db.billingcycles.remove({years:2017},1) // exclui o primeiro registro que ele encontrar

db.dropDatabase()




////
use theglint
db.users.find()
db.users.remove({email:"filipe@sisnet.com.br"})
"token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OTAzYTI4Yzc4MGU5Njc0MWYwYWU2NWMiLCJleHAiOjE0OTQwMTUyNDQxOTJ9.n-g59sLj0kBW6VNmjAHvdEyea9M8cswvnH9uajiunI4",
 