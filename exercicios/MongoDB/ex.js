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
db.billingcycles.update({$and: [{ month: 1}, { years: 2017 }] }, {$set:{credits:[{name:"Salário", value:5000}]}})
//UPDATE com ID
db.experiences.update({"_id" : ObjectId("58f651417b8a61601690c546")},{$set: {name: 'aaa'}})


//save - O SAVE muda o documento quando se passa a chave. Do contrario ele faz insert também.
db.billingcycles.save({ name: "xxxx", month: 5, years: 2020 })
db.billingcycles.save( {"_id" : ObjectId("58e2460ca591954402d36ef4"), "name":"Filipe"})
db.billingcycles.save({"_id" : ObjectId("58e2460ca591954402d36ef4"), "name": "xxxx", "month": 5, "years": 2020 })

//REMOVE

db.billingcycles.count()
db.billingcycles.remove({month:2})
db.billingcycles.remove({years:2017},1) // exclui o primeiro registro que ele encontrar

db.dropDatabase()




////
use theglint
db.users.find()
db.experiences.find()
db.users.remove({email:"filipe@sisnet.com.br"})
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OGU3ZmU1NzhlMmEzYzM4MjQxNjhiZTQiLCJleHAiOjE0OTIyMDM3MzU1NjB9.zXjg1ErEQOslnGIIhMJDd15VjjE7XHiSOfDh-SyTFZA
"token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OTAzYTI4Yzc4MGU5Njc0MWYwYWU2NWMiLCJleHAiOjE0OTQwMTUyNDQxOTJ9.n-g59sLj0kBW6VNmjAHvdEyea9M8cswvnH9uajiunI4",
MKLINK /D "C:\Repositories\Sisnet\theglint-backend\theglint-app-server\node_modules\theglint-core" "C:\Repositories\Sisnet\theglint-backend\theglint-core"
MKLINK /D "C:\_REPOSITORIES\GIT-SISNET\theglint-backend\theglint-app-server\node_modules\theglint-core" "C:\_REPOSITORIES\GIT-SISNET\theglint-backend\theglint-core"
  

//UPDATE com ID
db.experiences.update({"_id" : ObjectId("59089119e828ed9818640554")},{$set: {status: 'published'}})
db.experiences.remove({"_id" : ObjectId("58f651417b8a61601690c546")})


db.experiences.update({"_id" : ObjectId("59089119e828ed9818640554")},{$set: 	{"images": [         {                    "url": "https://theglint.s3.amazonaws.com/img-slide2.jpeg",           "updatedBy": "588fb0efe619278101a1aaa9",           "owner": "588fb0efe619278101a1aaa9",           "createdBy": "588fb0efe619278101a1aaa9",           "name": "img-slide2.jpeg",           "extension": "jpeg",           "updatedOn": "2017-02-12T14:23:04.004Z",           "createdOn": "2017-02-12T14:23:04.004Z",           "deleted": 0     } 	] }